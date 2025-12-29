const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controllers/authController");
const {
  registerValidation,
  loginValidation,
} = require("../middlewares/userValidation");

router.post("/register", registerValidation, Register);
router.post("/login", loginValidation, Login);
module.exports = router;
