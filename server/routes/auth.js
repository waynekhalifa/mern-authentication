const express = require("express");
const { register, login, authUser } = require("../controllers/auth");
const { auth } = require("../middlewares/user");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/user", auth, authUser);

module.exports = router;
