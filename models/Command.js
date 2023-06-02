const  mongoose = require('mongoose');
const schema = mongoose.Schema;



const commandSchema = new schema ({
    customerName : String,
    phoneNumber : String,
    address :String,
    reference : String,
    color : String,
    size : String,
    numberOfPiece : String 
})



module.exports = mongoose.model("Command", commandSchema);