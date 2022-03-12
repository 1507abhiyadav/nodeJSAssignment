const express = require("express");
const router =  express.Router();

const users = require("../model/user");
const bodypaser = require("body-parser");
const { body, param, validationResult } = require("express-validator");

router.use(bodypaser());
// get route fetch the data
router.get("/", async (req,res) =>{
    const user = await users.find()
    res.json({
        user
    });
})
// post - create data
// router.post("/", body('email').isEmail(), body('name').isAlpha(),async (req,res) =>{
//     try{
//         const errors = validationResult(req);
//         if (! errors.isEmpty()){
//             return res.status(400).json({errors: errors.array()});
//         }

//         console.log(req.body)
//         const user = await users.create(req.body);
//         return res.json({
//             status :"Success",
//             data : user
//         });
//     }
//     catch (e){
//         console.log(e);
//         return res.status(500).json({
//             status :"Failed",
//             message : e.message
//         })

//     }
    
// })
// //put -update  the data
// router.put("/:id", param("id").isMongoId(), async (req,res) =>{
//     try{
//         await users.updateOne({_id:req.params.id}, req.body);
//         return res.json({
//             status :"Success",
//             // data : user
//         });
//     }
//     catch (e){
//         console.log(e);
//         return res.status(500).json({
//             status :"Failed",
//             message : e.message
//         })

//     }
    
// })

// //delete - delete the data
// router.delete("/:id", async (req,res) =>{
//     try{
//         await users.deleteOne({_id:req.params.id}, req.body);
//         return res.json({
//             status :"Success",
//             // data : user
//         });
//     }
//     catch (e){
//         console.log(e);
//         return res.status(500).json({
//             status :"Failed",
//             message : e.message
//         })

//     }
    
// })



// router.get("*", async (req,res) =>{
//     res.status(404).json({
//         status:"Failed",
//         message :"API NOT FOUND"
//     });
// })


module.exports = router;
