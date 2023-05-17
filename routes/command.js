const express = require("express");

const { get_command, add_command } = require("../controllers/command.controller");
const router = express.Router();




router.post("/addcommand", add_command);
router.get("/getcommand",  get_command);


module.exports = router;