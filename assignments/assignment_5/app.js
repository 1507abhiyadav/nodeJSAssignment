const express = require("express");
const mongoose = require("mongoose");
const userrouter = require("./routes/user");
const loginrouter = require("./routes/login");
const postrouter = require("./routes/posts");
const jwt= require("jsonwebtoken");
const app = express();
const SECRET = "RESTAPI"

mongoose.connect('mongodb://localhost:27017/assignment_5');

app.use("/api/v1/posts", (req, res, next) =>{
    var token = req.headers.authorization.split("test ")[1];
    if (!token){
        res.status(401).json({
            status:"failed",
            message: "Invalid token"
        })
    }
    jwt.verify(token, SECRET ,function(err, decoded){
        if(err){
            return res.status(401).json({
                status:"failed",
                message:"Invalid token"
            })
        }
        req.user = decoded.data
        next();
    })
    
})


app.use('/api/v1/users',  userrouter);
app.use("/api/v1", loginrouter)
app.use("/api/v1", postrouter);

app.listen(3000,()=> console.log("server is listening"))