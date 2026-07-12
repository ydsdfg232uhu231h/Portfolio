const express = require("express");
const { getpdffile } = require("../controller/resume.controller");

const router = express.Router();

router.get("/resume", getpdffile);

module.exports = router;