const Question = require("../../models/question");

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find({}, { correctAnswer: 0 });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
