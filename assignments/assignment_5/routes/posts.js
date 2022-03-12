const express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const router =  express.Router();
const posts = require("../model/post")
router.use(bodyParser())


router.get("/posts", async (req, res) =>{
    const post = await posts.find();
    res.json({
        status: "sucesss",
        post
    });
});

router.post("/posts", async (req, res) =>{
    const post = await posts.create({
        title:req.body.title,
        body: req.body.body,
        image: req.body.image,
        user: req.user
    });
    res.json({
        status: "sucess",
        message: "posted sucessfully"
    })
})


router.put("/posts/:id", async (req, res) =>{
    const post = await posts.updateOne({_id: req.params.id, user: req.user}, {body: req.body.body});
    console.log(post);
    if (post.modifiedCount > 0){
        res.json({
            status: "sucess",
            message: "posted updated",
        })

    }else{
        res.json({
            status:"user can not update this post"
        })
    }
   
})

router.delete("/posts/:id", async (req, res) =>{
    const post = await posts.deleteOne({_id: req.params.id, user: req.user});
    res.json({
        status: "sucess",
        message: "posted deleted",
    })
})



module.exports = router;