const UserResponse = require("../../models/userResponse.js");
const User = require("../../models/user.js");
const Question = require("../../models/question.js");

exports.response = async (req, res) => {
  const { name, email , responses, formData } = req.body;
  console.log(req.body);

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

    console.log(">>Response Updated");

    await User.findOneAndUpdate(
      { email: email },
      { $set: { score: score, hasGiven: true, isGiving: false } },
      { new: true }
    );

    console.log("User Updated");
    res.status(201).json(savedResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getResponses = async (req, res) => {
  try {
    const userResponses = await UserResponse.find();
    if (!userResponses) {
      return res.status(404).json({ message: "No user responses found" });
    }

    res.json(userResponses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user responses" });
  }
};