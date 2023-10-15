const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter a Title"],
        unique : true ,
    },
    slug:{
        type : String ,  //slug is the url of our post
         unique : true ,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    image:{
        type:{
            image_url:{
                type:String,
                required:true
            },
            cloudnary_id:{
                type:String,
                required:true
            }
        },
        required:true
    },
    content:{
        type:String,
        required:true
    },
     description:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,default:false
    }
},{
    timestamps:true
})

const model = mongoose.model("post",schema);

module.exports = model;