const express = require("express");
const router = express.Router();
const { protect } = require("../auth/jwt");
const { response, getResponses } = require("../controllers/responses/response");
const { getStats } = require("../controllers/responses/getStats");

router.post("/", protect, response);

router.get("/", getResponses);

router.post("/getStats", getStats);

module.exports = router;
