const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Post = require('./post')

const commentSchema = new mongoose.Schema({
    _id:{type:ObjectId},
  text:String,
  author:String,
  postId:{
      type:ObjectId,
      ref:"Post"
  }
 
},{timestamps:true});

module.exports = mongoose.model('Comment',commentSchema)
