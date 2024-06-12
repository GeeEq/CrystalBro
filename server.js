const express = require("express");
const app = express();
const mangoose = require("mangoose");
const { Schema } = mangoose;
app.use(express.json());

// DB jungtis

mangoose.connect("mongodb://localhost:27017/CrystalBro/aliens", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// schema

const sch = new Schema({
  name: string,
  img: string,
  location: string,
  description: string,
});

const monmodel = mongoose.model("NEWCOL", sch);

// post

app.post("/post", async (req, res) => {
  console.log("Post function");

  const data = new monmodel({
    name: string,
    img: string,
    location: string,
    description: string,
  });
  const val = data.save();
  res.send("posted");
});
