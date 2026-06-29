const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

// Register Route
router.post(
  "/register",
  registerValidation,
  registerUser
);

// Login Route
router.post(
  "/login",
  loginValidation,
  loginUser
);

module.exports = router;