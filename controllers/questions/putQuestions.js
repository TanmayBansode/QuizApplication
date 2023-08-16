const Question = require("../../models/question");
exports.putQuestions = async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      {
        questionText: req.body.questionText,
        options: req.body.options,
        correctAnswer: req.body.correctAnswer,
      },
      { new: true }
    );
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
