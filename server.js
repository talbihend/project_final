const express = require("express");
const connectDB = require ("./config/connectDB");
const user = require("./routes/user")
const piece = require("./routes/piece")
const command = require("./routes/command")


const app = express();

app.use(express.json());
app.use('/user',user);
app.use('/piece',piece);
app.use('/command',command);




connectDB();


app.listen(4000, (err) => 
err ? console.log(err) : console.log("Server is running on port 4000")
);
