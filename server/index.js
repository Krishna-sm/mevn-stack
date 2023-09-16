const express = require("express");
const { Authentication } = require("./routes");
const { ConnectDB } = require("./config/db");
const morgan = require("morgan");

const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const port = 3000;
ConnectDB();

app.get("/",(req,res)=>{
    res.send("Hi this working");
})
// routes
app.use("/api/v1",Authentication)

app.listen(port,()=>{
    console.log("this is working on localhost:3000")
})

