const httpStatus = require("http-status");
const { UserModel } = require("../models");
const ApiError = require("../utils/ApiError");
const { GenerateToken } = require("../utils/jwt.utils");

const register = async(body)=>{
    const {name,email,password} = body;

    const existUser = await UserModel.findOne({email:email});
    if(existUser){
      throw new ApiError(httpStatus.BAD_REQUEST,"User Already Exist");
    }

  const user = await  UserModel.create({name,email,password});
  return user;

}

const loginService = async(body)=>{
  const {email,password} = body;

  const existUser = await UserModel.findOne({email:email});
  if(!existUser){
    throw new ApiError(httpStatus.NOT_FOUND,"User Not Exist");
  }

const isMatch = await existUser.comparePassword(password);

if(!isMatch){
  throw new ApiError(httpStatus.BAD_REQUEST,"Invalid Crendentials");
}



  // return existUser;
  const token = await GenerateToken(existUser);
  return token;



}

const UserProfile = async(id)=>{
  return await UserModel.findById(id).select("name email");
}


module.exports = {
    register,
    loginService,
    UserProfile
}