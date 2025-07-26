import mongoose from "mongoose";
const MessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["user", "assistant"],
    required: true,
  },
});
const ThreadSchema = new mongoose.Schema({
  user:{
    type : mongoose.Schema.Types.ObjectId,
    ref :"User",
    required : true
  },
  threadId: {
    type: Number,
    // unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: "New Chat",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  messages: [MessageSchema],
});
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export const Thread = mongoose.model("Thread", ThreadSchema);
export const User = mongoose.model("User", UserSchema);
// export default Thread;
