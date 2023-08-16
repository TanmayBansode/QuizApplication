const Question = require("../../models/question");
exports.deleteQuestions = async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    res.json(deletedQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
