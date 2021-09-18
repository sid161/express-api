const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Comment = require('./comment.js')

const postSchema = new mongoose.Schema({
    _id:{type:ObjectId},
  title: { type: String, required: true },
  message: { type: String },
  comments: [{ type: ObjectId, ref: "Comment" }],
  likes: [{ type: ObjectId, ref: "User" }],
  imagePath:String
 
},{timestamps:true});

module.exports = mongoose.model('Post',postSchema)
