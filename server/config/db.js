const mongoose = require("mongoose");

exports.ConnectDB = async()=>{
            await mongoose.connect("mongodb://127.0.0.1:27017/blog");
            console.log(`the db is connect with ${mongoose.connection.host}`);
}