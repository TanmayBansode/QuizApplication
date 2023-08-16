const mongoose = require("mongoose");

const answerResponseSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  selectedAnswer: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const userResponseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  responses: [answerResponseSchema],
  formData: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const UserResponse = mongoose.model(
  "UserResponse",
  userResponseSchema,
);

module.exports = UserResponse;
