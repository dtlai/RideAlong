const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");
const validatePostInput = require("../../validation/posts");

router.get("/", (req, res) => {
  console.log('got')
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ nopostsfound: "No posts found" }));
});

// router.get("/user/:user_id", (req, res) => {
//   Post.find({ user: req.params.user_id })
//     .then((posts) => res.json(posts))
//     .catch((err) =>
//       res.status(404).json({ nopostsfound: "No posts found from that user" })
//     );
// });

router.get("/:postId", (req, res) => {
  Post.find({"_id" : mongoose.Types.ObjectId(req.params.postId)}) 
    .then((post) => res.json(post))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

// protected route to make posts
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      startLocation: req.body.startLocation,
      endLocation: req.body.endLocation,
      capacity: req.body.capacity,
      numPassengers: req.body.numPassengers,
      createdAt: req.body.createdAt,
      leaveDate: req.body.leaveDate,
      price: req.body.price,
      carMake: req.body.carMake,

      user: req.user.id,
    });

    newPost.save().then((post) => res.json(post));
  }
);

router.delete('/delete/:id', function (req, res) {
  var id = req.params.id;
  var collection = db.get().collection('post');

  collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
  });

  res.json({ success: id })
});



module.exports = router;
