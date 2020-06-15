const express = require("express");
const { register, login, authUser, logout } = require("../controllers/auth");
const { auth } = require("../middlewares/user");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/user", auth, authUser);
router.get("/auth/logout", auth, logout);

module.exports = router;
