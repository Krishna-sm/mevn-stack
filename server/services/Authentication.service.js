const httpStatus = require("http-status");
const { UserModel ,BlogPostModel} = require("../models");
const ApiError = require("../utils/ApiError");
const { GenerateToken } = require("../utils/jwt.utils");

const register = async(body)=>{
    const {name,email,password} = body;

    const existUser = await UserModel.findOne({email:email});
    if(existUser){
      throw new ApiError(httpStatus.BAD_REQUEST,"User Already Exist");
    }

  const user = await  UserModel.create({name,email,password});
  return {msg:"User Register Successfully"};

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
  return {msg:"login success",token};



}

const UserProfile = async(id)=>{
  return await UserModel.findById(id).select("name email");
}

const createPost= async(user,body,file)=>{
    const {title,content} = body;

const existance = await BlogPostModel.findOne({title});
if(existance){
  throw new ApiError(httpStatus.BAD_REQUEST,"Title already exist try with another name")
}

    const newTitle = title.split(" ").join("-")

    const model =await BlogPostModel.create({
      title:title,
      slug:newTitle,
      content,
      image:file?.filename,
      user:user
    })

    return model;


}

const AllPost  = async()=>{
  const posts =  await BlogPostModel.find({isDeleted:false}).populate("user","name email")
  return {posts,total:posts.length}
}

const PostById = async(id)=>{
  const post =  await BlogPostModel.findByOne({_id:id, isDeleted:false}).populate("user","name email")
  return {post}
}


const deleteById = async(id)=>{
  const post =  await BlogPostModel.findByIdAndUpdate(id,{
    isDeleted:true
  })
  return {msg:"post deleted"}
}


module.exports = {
    register,
    loginService,
    UserProfile,
    createPost,
    AllPost,
    PostById,
    deleteById
}