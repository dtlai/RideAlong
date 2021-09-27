const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;

const app = express();
const port = process.env.PORT || 5000;


// importing routes
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

// importing body parser to parse JSON
const bodyParser = require("body-parser");

// importing path from Express
const path = require('path');

// load static build folder in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// importing passport
const passport = require("passport");
// passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use routes

app.use("/api/users", users);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
