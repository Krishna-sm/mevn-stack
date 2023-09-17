const express = require("express");
const { AuthenticationController } = require("../controllers");
const validate = require("../middlewares/validate");
const { createUser } = require("../validations/user.validation");

const router = express.Router();

router.route("/register").post(validate(createUser),AuthenticationController.register)

module.exports = router;