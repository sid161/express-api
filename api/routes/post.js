const express = require("express");
const router = express.Router();
const Post = require("../model/post");
const mongoose = require("mongoose");
const auth = require('../middleware/auth');
const cloudinary = require('cloudinary').v2

cloudinary.config({ 
  cloud_name: 'sid161092', 
  api_key: '237865587154662', 
  api_secret: 'JX29Ke0jhNWzF2mp47xEPWsgv5k',
  secure: true
});

router.get("/", auth, (req, res, next) => {
  // to get posts
  Post.find()
    .then((result) => {
      res.status(200).json({ postData: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:id",auth, (req, res) => {
  const id = req.params.id; // get post by particular id
  Post.findById(id, req.body, (err, result) => {
    if (err) return next(err);
    res.status(200).json({ result });
  });
});

router.post("/", (req, res, next) => {
  const file = req.files.photos;
  cloudinary.uploader.upload(file.tempFilePath,(err,result) => {
    console.log(result)
    // for posting a post
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    message: req.body.message,
    imagePath:result.url
  });

  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newPost: result,
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  })
  
});

router.delete("/:id",auth, (req, res, next) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id, (err, result) => {
    if (err) return next(err);
    res.status(200).json({ message: "Deleted succesfully" });
  });
});

router.put("/:id",auth, (req, res, next) => {
  //   const id = req.params.id;
  Post.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        message: req.body.message,
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        updated_post: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).status.json({ error: err });
    });
});

module.exports = router;
