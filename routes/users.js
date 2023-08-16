const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/users/registerUser");
const { getUsers } = require("../controllers/users/getUsers");
const { admin } = require("../auth/admin");

router.get("/", admin, getUsers);

// Check if user is registered
router.post("/check", registerUser);

module.exports = router;
