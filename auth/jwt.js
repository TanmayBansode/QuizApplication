const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token not issued" });
  }

  try {
    const decodedToken = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );
    next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
