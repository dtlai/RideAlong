const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Server is running on port ${port}`));
