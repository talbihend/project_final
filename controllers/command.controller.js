
const Command = require("../models/Command");



exports.add_command = async (req, res) => {
    const { customer_name ,  phone_number,  address ,   reference ,  color , size , number_of_piece  } = req.body;
    try {
        const newCommand = new Command({
            customer_name ,
            phone_number,
            address ,
            reference ,
            color ,
            size ,
            number_of_piece 
        })
        await newCommand.save(); 
        res.send(newCommand);
    }
    catch(error){
        res.send(error.message);
    };
};

exports.get_command = async(req,res)=>{
    try {
        const commands = await Command.find();
        res.send(commands);
    } catch (error) {
        res.send(error.message);
    }
    
   
}