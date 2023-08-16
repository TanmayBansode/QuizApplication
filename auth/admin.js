const jwt = require("jsonwebtoken");

exports.admin = async (req, res, next) => {
  if (req.body.adminPassword == "some-password") next();
  else {
    return res.status(401).json({ message: "Only admin can access this" });
  }
};
