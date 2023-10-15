const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    isContact:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const model = mongoose.model("contact",Schema);

module.exports = model;