const express = require("express");
const { register } = require("../controllers/auth");

const router = express.Router();

router.post("/auth/register", register);

module.exports = router;
