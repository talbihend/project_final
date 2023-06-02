const  mongoose = require('mongoose');
const schema = mongoose.Schema;



const pieceSchema = new schema ({
    image : String,
    name : String,
    reference : String,
    color : String,
    cathegory : String
})



module.exports = mongoose.model("Piece", pieceSchema);