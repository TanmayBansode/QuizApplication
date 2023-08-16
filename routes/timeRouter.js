const express = require("express");
const router = express.Router();
const { protect } = require("../auth/jwt");
const { getRemainingTime } = require("../controllers/time/getRemainingTime");

router.get("/remaining", protect , getRemainingTime);

module.exports = router;
