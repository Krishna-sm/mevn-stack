const express = require("express");
const { AuthenticationController } = require("../controllers");

const router = express.Router();

router.route("/register").post(AuthenticationController.register)

module.exports = router;