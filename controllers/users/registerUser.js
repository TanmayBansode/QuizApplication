const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Does User Exist ?
    // console.log(email, password);

    let user = await User.findOne({ email });

    if (user) {
      // console.log(user);

      // Check the hasGiven parameter
      if (user.hasGiven) {
        // Exam Already Given
        return res.status(403).json({ message: "Exam already given" });
      } else {
        // Invalid Password
        if (user.password != password) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        // User Registration Complete
        user.isGiving = true;
  
        let token = signToken();

        await user.save();

        return res
          .status(200)
          .json({ message: "User registration completed", token: token });
      }
    } else {
      // User Doesn't Exist
      return res.status(403).json({ message: "User not registered" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
