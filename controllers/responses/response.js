const UserResponse = require("../../models/userResponse.js");
const Question = require("../../models/question.js");

exports.response = async (req, res) => {
  const { name, email , responses, formData } = req.body;

  try {
    let score = 0;
    const questions = await Question.find();

    const userResponses = responses.map((response) => {
      const question = questions.find(
        (q) => q._id.toString() === response.questionId
      );
      const selectedAnswerIndex = question.options.indexOf(
        response.selectedAnswer
      );
      const isCorrect = selectedAnswerIndex === question.correctAnswer;

      if (isCorrect) {
        score++;
      }

      return {
        questionId: response.questionId,
        selectedAnswer: response.selectedAnswer,
        isCorrect,
      };
    });

    const newUserResponse = new UserResponse({
      name: name,
      email: email ,
      responses: userResponses,
      formData: formData,
      score: score,
    });

    const savedResponse = await newUserResponse.save();

    res.status(201).json(savedResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getResponses = async (req, res) => {
  const userEmail = req.query.email;

  try {
    const userResponse = await UserResponse.findOne({ email: userEmail });
    if (!userResponse) {
      return res.status(404).json({ message: "User response not found" });
    }

    res.json({ score: userResponse.score });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user score" });
  }
};