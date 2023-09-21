const express = require("express");
const { AuthenticationController } = require("../controllers");
const validate = require("../middlewares/validate");
const { createUser,loginUser } = require("../validations/user.validation");
const verifyJWT = require("../middlewares/verifyToken");

const router = express.Router();

router.route("/register").post(validate(createUser),AuthenticationController.register)
router.route("/login").post(validate(loginUser),AuthenticationController.loginController)


router.route("/profile").get(verifyJWT,AuthenticationController.profileController)

module.exports = router;