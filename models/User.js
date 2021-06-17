const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new user
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: "post"
    }],
    requests: [{
      type: Schema.Types.ObjectId,
      ref: "post"
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", UserSchema);
