const express = require("express");
const app = express();
const PORT = process.env.PORT || 5038;

app.listen(PORT, () => console.log('Server running on port ${PORT'))

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sielaleis:mangojerry@cluster0.qsim4gh.mongodb.net/CrystalBro", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

