const mongoose = require("mongoose");

const ChatHistorySchema = new mongoose.Schema(
  {
    userId: String,
    mentorId: String,
    userMessage: String,
    mentorReply: String,
  },
  { timestamps: true }
);

const ChatHistory = mongoose.model("ChatHistory", ChatHistorySchema);
module.exports = { ChatHistory };
