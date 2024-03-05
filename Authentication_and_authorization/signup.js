const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const Mongoose = require("mongoose");
const Crypto = require("crypto");

//list all users registered in the system
router.get("/user_details",(req,res,next)=>{
    User.find().exec().then((result)=>{
        res.status(200).json({
            my_result:result
        });
    }).catch((err)=>{
        res.status(400).json({
            error:err.message
        });
    });
});

//list all user by category..
router.get("/user_details/:account_type",(req,res,next)=>{
    const account_type = req.params.account_type;
    User.find({}).exec((err,result)=>{
        if(err){
            res.json({
                message:err
            }).status(400);
        }else{
            res.status(200).json(result);
        }
    })
})

//add new users.
router.post("/user_details/new_user",(req,res,next)=>{
    const hashedPassword = Crypto.createHash("sha512").update(req.body.password).digest('Hex');
    const newUser = {
        _id:new Mongoose.Types.ObjectId(),
        email:req.body.email,
        givenName:req.body.givenName,
        sirName:req.body.sirName,
        phoneNumber:req.body.phoneNumber,
        accountType:req.body.accountType,
        password:hashedPassword,
    }
    
    let new_user = new User(newUser);
    new_user.save().then((result)=>{
        res.status(201).json({
            Result:result
        });
    }).catch((err)=>{
        res.status(400).json({
            Message:"Save Unsuccessful! please try again",
            Error: err.message
        });
    })
})

//edit user accounts
router.put("/user_details/edit_user/:id",(req,res,next)=>{

})

//change password
router.put("/user_details/change_password/:id",(req,res,next)=>{
    
})


module.exports = router;