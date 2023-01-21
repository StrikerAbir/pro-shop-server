const express = require("express");
const user = require("../controller/user.controler");
const router = new express.Router();

router.get("/", user.addUser);
module.exports = router;