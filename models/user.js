const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  hasGiven: {
    type: Boolean,
    required: true,
  },
  isGiving: {
    type: Boolean,
    required: true,
  },
  score : {
    type: Number
  },
});

const User = model("User", userSchema);

module.exports = User;
