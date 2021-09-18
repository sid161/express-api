const express = require("express");
const router = express.Router();
const User = require("../model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: hash,
        userType: req.body.userType,
      });
      user.save().then((result) => res.status(200).json({ newUser: result }))
      .catch(err => res.status(500).json({error:err}))
    }
  });
});

router.post('/login',(req,res,next) => {
  User.find({email:req.body.email})
  .exec()
  .then(user => {
    if(user.length < 1){
      return res.status(401).json({
        msg:"user not exist"
      })
    }
    bcrypt.compare(req.body.password,user[0].password, (err,result) => {
      if(!result){
        res.status(401).json({msg:"username/password matching failed"})
      }
      if(result){
        const token = jwt.sign({
          name:user[0].name,
          email:user[0].email,
          userType:user[0].userType,
          mobile:user[0].mobile
        },
        'this is secret',
        {
          expiresIn:"24h"
        }
        );
        res.status(200).json({
          name:user[0].name,
          email:user[0].email,
          userType:user[0].userType,
          mobile:user[0].mobile,
          token:token
        })
      }
    })
  })
  .catch(err => {
    res.status(500).json({
      err:err
    })
  })
})

module.exports = router;
