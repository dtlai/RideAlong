const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    // type: Schema.Types.ObjectId,
    // ref: "users",
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  carMake: {
    type: String,
    required: true,
  },
  startLocation: {
    type: String,
    required: true,
  },
  endLocation: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  numPassengers: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  leaveDate: {
    type: Date,
    default: Date.now, //date.set
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
