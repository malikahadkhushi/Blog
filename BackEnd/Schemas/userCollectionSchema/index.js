const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
},{timestamps:true});


const userModel = mongoose.model('users',userSchema);

module.exports = {userModel};