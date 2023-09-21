const httpStatus = require("http-status");
const { AuthenticationService } = require("../services");
const catchAsync = require("../utils/catchAsync")
class AuthenticationController{
   static register = catchAsync(async(req,res)=>{
      const res_obj = await AuthenticationService.register(req?.body);
      // res.send(res_obj)
      res.status(httpStatus.CREATED).send(res_obj);
     })
     static loginController = catchAsync(async(req,res)=>{
      const res_obj = await AuthenticationService.loginService(req?.body);
      // res.send(res_obj)
      res.status(httpStatus.OK).send(res_obj);
     })
     static profileController = catchAsync(async(req,res)=>{
      const res_obj = await AuthenticationService.UserProfile(req?.user);
      // res.send(res_obj)
      res.status(httpStatus.OK).send(res_obj);
     })
}

module.exports = AuthenticationController