const express = require("express");
const router = express.Router();
const { newQuestions } = require("../controllers/questions/newQuestions");

const { getQuestions } = require("../controllers/questions/getQuestions");
const { putQuestions } = require("../controllers/questions/putQuestions");
const { deleteQuestions } = require("../controllers/questions/deleteQuestion");

const { protect } = require("../auth/jwt");

// GET all questions
router.get("/", protect, getQuestions);

// POST a new question
router.post("/", protect, newQuestions);

// PUT (update) a question
router.put("/:id", protect, putQuestions);

// DELETE a question
router.delete("/:id", protect, deleteQuestions);

module.exports = router;
