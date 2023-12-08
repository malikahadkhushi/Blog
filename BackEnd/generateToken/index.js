const jwt = require("jsonwebtoken")
const generateToken = (user , secretKey)=>{

    const token = jwt.sign({info:user} , secretKey);
    console.log(token);
}
module.exports = generateToken