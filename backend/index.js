// import "dotenv/config"
// import OpenAI from 'openai';
// const openai = new OpenAI({
//   baseURL: 'https://openrouter.ai/api/v1',
//  apiKey:  process.env.OPENROUTER_API_KEY //'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',
// });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     model:'qwen/qwen3-14b:free',
//     messages: [
//       {
//         role: 'user',
//         content: 'What is the meaning of life?',
//       },
//     ],
//   });

//   console.log(completion.choices[0]);
// }
// main();

import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import axios from "axios";
import  {chatRouter}  from "./routes/routes.js";
const app = express();
app.use(express.json());
app.use(cors({
  credentials :true,
  origin :"http://localhost:5173"
}));
app.use(cookieParser());
app.use("/api", chatRouter);
app.post("/test", async (req, res) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "qwen/qwen3-14b:free",
        messages: [{ role: "user", content: req.body.message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-type": "application/json",
        },
      }
    );
    // await Thread.create()
    res.status(200).json({
      msg: " Response recieved",
      message: response.data,
    });
  } catch (error) {
    console.log(error);
     res.status(500).json({
      msg: "Failed to fetch response",
      error: error.message,
    });
  }
});
// APIConnectionError.

async function connectToDB() {
  console.log("Trying..");
  
  await mongoose.connect(`${process.env.MONGO_URL}`);
  console.log("connected to db");
  
  app.listen(3000, () => {
    console.log("Server listening to port 3000");
  });
}
connectToDB();