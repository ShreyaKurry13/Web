const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const BlogPost = new Schema({
  name: String,
  age: Number,
  place: String
});

const userModel = mongoose.model('users',BlogPost);
module.exports = userModel