
const Command = require("../models/Command");



exports.add_command = async (req, res) => {
    const { customerName ,   phoneNumber ,  address ,   reference ,  color , size ,   numberOfPiece  } = req.body;
    try {
        const newCommand = new Command({
            customerName ,
            phoneNumber ,
            address ,
            reference ,
            color,
            size,
            numberOfPiece
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