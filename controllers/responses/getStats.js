const UserResponses = require("../../models/userResponse");
const Questions = require("../../models/question");
const mongoose = require("mongoose");

exports.getStats = async (req, res) => {
  try {
    const { userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    const response = await UserResponses.findOne({ email: userEmail });
    if (!response) {
      return res.status(404).json({ message: "Response not found" });
    }

    const questions = await Questions.find();

    const enhancedResponses = response.responses.map((responseItem) => {
        const question = questions.find((q) =>
          q._id.equals(responseItem.questionId)
        );
      
        const enhancedResponseItem = {
          questionId: responseItem.questionId,
          selectedAnswer: responseItem.selectedAnswer,
          isCorrect: responseItem.isCorrect,
          questionText: question ? question.questionText : "Error Finding Question",
          correctAnswer: question.correctAnswer,
          options: question.options,
        };
      
        return enhancedResponseItem;
      });
      
      const returningObject = {
        responses : enhancedResponses,
        score : response.score
      }

    res.status(200).json(returningObject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
