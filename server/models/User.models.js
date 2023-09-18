const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

Schema.pre("save", async function(next){
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
    }
    next();
})

Schema.methods.comparePassword = async function(password){
            const isMatch = await bcrypt.compare(password,this.password)
            return isMatch;
}


const model = mongoose.model("user",Schema);



module.exports= model;