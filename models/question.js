const { model, Schema } = require("mongoose");

const questionSchema = new Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: Number,
    required: true,
  },
});

const Question = model("questions", questionSchema);

module.exports = Question;
