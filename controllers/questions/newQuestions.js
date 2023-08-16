const Question = require("../../models/question");

exports.newQuestions = async (req, res) => {
  const question = new Question({
    questionText: req.body.questionText,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer,
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
