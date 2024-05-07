const express = require("express");
const { loginUser, createUser } = require("../controller/Auth");

const router = express.Router();

// /user is already added in base path
router.post("/signup", createUser).post("/login", loginUser);

exports.router = router;
