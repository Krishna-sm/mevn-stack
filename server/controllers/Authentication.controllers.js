const httpStatus = require("http-status");
const { AuthenticationService } = require("../services");
const catchAsync = require("../utils/catchAsync")
class AuthenticationController{
   static register = catchAsync(async(req,res)=>{
      const res_obj = await AuthenticationService.register(req?.body);
      // res.send(res_obj)
      res.status(httpStatus.CREATED).send(res_obj);
     })
}

module.exports = AuthenticationController