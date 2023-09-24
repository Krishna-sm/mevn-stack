const express = require("express");
const { AuthenticationController } = require("../controllers");
const validate = require("../middlewares/validate");
const { createUser,loginUser } = require("../validations/user.validation");
const verifyJWT = require("../middlewares/verifyToken");
const { upload } = require("../utils/uploads");

const router = express.Router();

router.route("/register").post(validate(createUser),AuthenticationController.register)
router.route("/login").post(validate(loginUser),AuthenticationController.loginController)


router.route("/profile").get(verifyJWT,AuthenticationController.profileController)

router.route("/post")
.post(verifyJWT,upload.single("image"),AuthenticationController.postController)
.get(AuthenticationController.AllpostController)

router.route("/post/:id")
.get(AuthenticationController.PostById)


module.exports = router;