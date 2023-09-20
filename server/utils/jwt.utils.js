const jwt = require("jsonwebtoken");
const { ConstantKeys } = require("../constant/KEYS");

exports.GenerateToken = async(user)=>{
    const token = await jwt.sign({userId:user._id},ConstantKeys.JWT_KEY,{
        expiresIn:"1d"
    })
        return token;
}
