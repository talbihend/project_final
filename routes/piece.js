
const express = require("express");

const { add_piece, get_piece, update_piece, delete_piece, get_piece_by_cathegory } = require("../controllers/piece.controller");
const { pieceRules, validator } = require("../middlewares/Validator");
const router = express.Router();


router.post("/addpiece", pieceRules(), validator , add_piece);
router.get("/getpiece",  get_piece);
router.put("/updatepiece/:id",  update_piece);
router.delete("/deletepiece/:id",  delete_piece);
// router.get("/getbycathegory/:cathegory",  get_piece_by_cathegory);


module.exports = router;
