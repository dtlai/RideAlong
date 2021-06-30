const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const _ = require('lodash');
const Post = require("../../models/Post");
const User = require("../../models/User");
const validatePostInput = require("../../validation/posts");
const { request } = require("express");

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .populate("user")
    .exec(function (err, posts) {
      if (err) return res.status(400).json({"error": "Oops an error has occurred"});
      posts.map(post => {
        let allowed = ["firstName", "lastName", "_id"];
        post.user = _.pick(post.user, allowed);
      })
      return res.json(posts);
  })
});

router.put("/edit", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.
    findOne({"_id" : mongoose.Types.ObjectId(req.body.postId)})
    .then(post => {
      post.title = req.body.title;
      post.description = req.body.description;
      post.startLocation = req.body.startLocation;
      post.endLocation = req.body.endLocation;
      post.capacity = req.body.capacity;
      post.numPassengers = req.body.numPassengers;
      post.createdAt = req.body.createdAt;
      post.leaveDate = req.body.leaveDate;
      post.price = req.body.price;
      post.carMake = req.body.carMake;
      post.user = req.body.user;
      return post.save();
    })
    .then(post => res.json(post));
  }
);

// Adds user to the post's array of passengers and adds post to the user's array of requests
router.put("/:postId/request", 
  passport.authenticate("jwt", { session: false }), 
  (req, res) => {
    let savedPost = null;
    let savedUser = null;
    Post
      .findOne({"_id" : mongoose.Types.ObjectId(req.params.postId)})
      .populate("user")
      .exec()
      .then(post => {
        savedPost = post;
        if (post.passengers.includes(req.user._id)) {
          return req.user;
        }
        req.user.requests.push(post);
        return req.user.save();
      })
      .then(user => {
        savedUser = user;
        if (savedPost.passengers.includes(req.user._id)) {
          return savedPost;
        }
        savedPost.passengers.push(user);
        return savedPost.save();
      })
      .then(post => {
        let allowed = ["firstName", "lastName"];
        post.user = _.pick(post.user, allowed);
        return res.json({post: post, user: savedUser})
      })
      .catch(err => {
        res.status(400).end()}
      );
});

// Removes user from the post's array of passengers and removes post from the user's array of requests
router.put("/:postId/cancel", 
  passport.authenticate("jwt", { session: false }), 
  (req, res) => {
    let savedPost = null;
    let savedUser = null;
    Post
      .findOne({"_id" : mongoose.Types.ObjectId(req.params.postId)})
      .populate("user")
      .exec()
      .then(post => {
        savedPost = post;
        let idx = savedPost.passengers.indexOf(req.user._id)
        if (idx === -1) {
          return req.user;
        } else {
          idx = req.user.requests.indexOf(idx);
          req.user.requests.splice(idx, 1);
          return req.user.save();
        }
      })
      .then(user => {
        savedUser = user;
        let idx = savedPost.passengers.indexOf(req.user._id);
        if (idx === -1) {
          return savedPost;
        } else {
          savedPost.passengers.splice(idx, 1);
          return savedPost.save();
        }
      })
      .then(post => {
        let allowed = ["firstName", "lastName"];
        post.user = _.pick(post.user, allowed);
        return res.json({post: post, user: savedUser})
      })
      .catch(err => {
        res.status(400).end()}
      );
});

router.get("/search", (req, res) => {
  const start = new RegExp(req.query.startLocation, "i")
  const end = new RegExp(req.query.endLocation, "i")
  Post.find({startLocation: start, endLocation: end}, function (err, docs) {
      if (err){
          console.log(err);
      }
  })
  .populate("user")
  .exec()
  .then((posts) => res.json(posts));
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

    let savedPost = null;
    newPost.save().then(post=> {
      savedPost = post;
      req.user.posts.push(post)
      return req.user.save();
    }).then((user) => res.json(savedPost));
  }
);

// Gets the post details by postId only extracting specific data
router.get("/:postId", (req, res) => {
  Post.
    findOne({"_id" : mongoose.Types.ObjectId(req.params.postId)}).
    populate("user").
    populate("passengers").
    exec(function (err, post) {
      if (err) return res.status(400).json({"error": "Oops an error has occurred"});
      let allowed = ["_id", "firstName", "lastName", "username", "requests", "posts"];
      // const filteredObj = _.pick(post.user, allowed)
      post.user = _.pick(post.user, allowed);
      return res.json(post);
    })

});

router.delete('/:postId', function (req, res) {
  Post.deleteOne({"_id": (req.params.postId)})
    .then(deletedDocument => {
      if(deletedDocument) {
        console.log(`Successfully deleted document that had the form: ${deletedDocument}.`);
      } else {
        console.log("No document matches the provided query.");
      }
      return deletedDocument;
    })  
    .catch(err => console.error(`Failed to find and delete document: ${err}`))
  }
);




module.exports = router;


