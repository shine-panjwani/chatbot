import express from "express";
import jwt from "jsonwebtoken";
import { getAiGeneratedMessage } from "../utils/openAI.js";
import { Thread, User } from "../models/ChatSchema.js";
import authMiddleware from "../middlewares/middleware.js";
import bcrypt from "bcrypt";
import { z } from "zod";
export const chatRouter = express.Router();
const UserSchema = z.object({
  email: z.string().min(4),
  password: z.string().max(50).min(5),
});
chatRouter.post("/signup", async (req, res) => {
  const result = UserSchema.safeParse(req.body);
  if (!result.success) {
    return res.json({
      msg: "Enter valid inputs",
    });
  }
  const { email, password } = result.data;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({
      msg: "User already exists!",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email: email, password: hashedPassword });
    res.json({
      msg: "Added to DB",
      user: user,
    });
  } catch (error) {
    res.json({
      msg: "Error",
      eror: error,
    });
    console.log(error);
  }
});
chatRouter.post("/login", async (req, res) => {
  const result = UserSchema.safeParse(req.body);
  if (!result.success) {
    return res.json({
      msg: "Enter valid inputs",
    });
  }
  const { email, password } = result.data;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.json({
      msg: "Invalid email",
    });
  }
  const unHashedPassword = await bcrypt.compare(
    password,
    existingUser.password
  );
  if (!unHashedPassword) {
    return res.json({
      msg: "Incorrect password",
    });
  }
  const token = jwt.sign(
    { id: existingUser._id },
    process.env.JWT_SECRET
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // Must be true on HTTPS
    sameSite :"lax"
  });
  res.json({
    msg: "Logged in!!",
    token: token,
    ab: req.headers,
  });
});
chatRouter.post("/thread",authMiddleware, async (req, res) => {
  const { title, id } = req.body;
  try {
    const response = await Thread.create({ threadId: id, title: title });
    res.json({
      res: response,
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
});
chatRouter.get("/thread",authMiddleware, async (req, res) => {
  try {
    const response = await Thread.find({user : req.userId}).sort({ updatedAt: -1 });
    console.log(response);
    // console.log(Thread.modelName);

    res.status(200).json({
      msg: "All routes",
      response: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Failed to fetch",
    });
  }
});
chatRouter.get("/thread/:threadId", authMiddleware,async (req, res) => {
  const id = Number(req.params.threadId);
  console.log(id);

  try {
    const response = await Thread.findOne({
      threadId: id,
      user : req.userId
    });
    console.log(response);

    if (!response) {
      return "Could not find the thread";
    }
    res.json({
      msg: "Found thread",
      response: response.messages,
    });
  } catch (error) {
    res.json({
      msg: "Error to find the tread",
    });
  }
});
chatRouter.delete("/thread/:threadId",authMiddleware, async (req, res) => {
  const threadId = Number(req.params.threadId);
  console.log(threadId);

  try {
    const deletedThread = await Thread.findOneAndDelete({ threadId: threadId ,user :req.userId });
    console.log(deletedThread);

    if (!deletedThread) {
      res.status(404).json({ error: "Thread not found" });
    }
    res.status(200).json("Thread deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Failed to delete thread",
    });
  }
});
chatRouter.post("/chat",authMiddleware, async (req, res) => {
  const { threadId, message } = req.body;
  if (!threadId || !message) {
    // console.log("Insufficient data");
    return res.status(400).json({ msg: "Insufficient data" });
  }
  try {
    let thread = await Thread.findOne({ threadId,user: req.userId });
    if (!thread) {
      thread = await Thread.create({
        user : req.userId,
        threadId: threadId,
        title: message,
        messages: [{ role: "user", content: message }],
      });
    } else {
      thread.messages.push({ role: "user", content: message });
    }
    const aiResponse = await getAiGeneratedMessage(message);
    console.log(aiResponse);
    thread.messages.push({ role: "assistant", content: aiResponse });

    await thread.save();
    res.json({
      response: aiResponse,
      msg: "AI generated response",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error",
      error: error,
    });
  }
});
