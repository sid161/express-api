const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    _id: { type: ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: Number,
    password: String,
    userType: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
