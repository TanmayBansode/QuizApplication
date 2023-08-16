const express = require("express");
const router = express.Router();
const { protect } = require("../auth/jwt");
const { response } = require("../controllers/responses/response");

router.post("/", protect, response);

module.exports = router;
