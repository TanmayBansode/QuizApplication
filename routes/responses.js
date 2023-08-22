const express = require("express");
const router = express.Router();
const { protect } = require("../auth/jwt");
const { response, getResponses } = require("../controllers/responses/response");

router.post("/", protect, response);

router.get("/", protect, getResponses);

module.exports = router;
