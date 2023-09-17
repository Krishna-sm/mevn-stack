const express = require("express");
const { Authentication } = require("./routes");
const { ConnectDB } = require("./config/db");
const morgan = require("morgan");
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
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

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });
  
  // convert error to ApiError, if needed
  app.use(errorConverter);
  
  // handle error
  app.use(errorHandler);


app.listen(port,()=>{
    console.log("this is working on localhost:3000")
})

