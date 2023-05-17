const  mongoose = require('mongoose');
const schema = mongoose.Schema;



const commandSchema = new schema ({
    customer_name : String,
    phone_number : String,
    address :String,
    reference : String,
    color : String,
    size : String,
    number_of_piece : String 
})



module.exports = mongoose.model("Command", commandSchema);