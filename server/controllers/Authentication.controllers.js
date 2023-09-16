const { AuthenticationService } = require("../services");

class AuthenticationController{
   static register = async(req,res)=>{
    const res_obj = await AuthenticationService.register(req?.body);
    res.send(res_obj)
   }
}

module.exports = AuthenticationController