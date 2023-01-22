const express = require("express");
const user = require("../controller/user.controler");
const router = new express.Router();


router.post("/addUser", user.addUser);
router.post('/login', user.login);
module.exports = router;