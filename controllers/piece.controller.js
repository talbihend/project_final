const Piece = require("../models/Piece");



exports.add_piece = async (req, res) => {
    const { image, name, reference, color, cathegory } = req.body;
    try {
        const newPiece = new Piece({
            image,
            name,
            reference,
            color, 
            cathegory
        })
        await newPiece.save(); 
        res.send(newPiece);
    }
    catch(error){
        res.send(error.message);
    };
};

exports.get_piece = async(req,res)=>{
    try {
        const pieces = await Piece.find();
        res.send(pieces);
    } catch (error) {
        res.send(error.message);
    }
    
   
}


exports.update_piece =  async(req,res)=>{
    try{
        const editPiece = await Piece.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        res.send(editPiece);

    } catch (error) {
        res.send(error.message);
    }}



exports.delete_piece = async (req, res) => {
        try {
          const deletePiece = await Piece.findByIdAndDelete(req.params.id);
          res.send(deletePiece);
        } catch (error) {
            res.send(error.message);
    
        }}

// exports.get_piece_by_cathegory = async(req,res)=>{
// const {cathegory}=req.params
// // console.log(cathegory)
//         try {
//             const pieceByCathegory = await Piece.find({cathegory});
//             res.send(pieceByCathegory);
//         } catch (error) {
//             res.send(error.message);
//         }    

//         }