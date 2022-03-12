const express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const router =  express.Router();
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
const users = require("../model/user");
router.use(bodyParser())
const SECRET = "RESTAPI"

router.use(bodyParser.json())
router.post("/register", body("name"), body("email"), body("password"), async (req,res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array()});
        }
        const {name, email, password} = req.body
        bcrypt.hash(password, 10, async function(err, hash){
            if(err){
                res.status(400).json({
                    status:"failed",
                    message: "Invalid details"

                })
            }else{
                await users.create({
                    name,
                    email, 
                    password: hash
                })
                res.json({
                    status:"sucess",
                    message : "registered sucessfully"
                })
            }

        });

    }catch (e){
        res.json({
            status:"failed", 
            message:e.message
        })

    }
   
});


router.post("/login",body("email"), body("password"), async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array()});
        }
       
        const {email, password} = req.body
        const user = await users.findOne({email})
        if (user){
            bcrypt.compare(password, user.password).then(function(result){
                if (result){
                    var token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: user._id
                      }, SECRET);
                    res.json({
                        status: "sucess",
                        message: "logged in sucessfully",
                        token
                    })
                }else{
                    res.status(401).json({
                        status: "failed",
                        message: "Not Authenticated User"
                    })
                }
            });
        }else{
            res.status(401).json({
                status: "failed",
                message: "user not registered"
            })
        }

    }catch (e){
        res.json({
            status:"failed", 
            message:e.message
        })

    }
   
})

module.exports = router;