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
  _id: ObectId,
  name: string,
  img: string,
  location: string,
  description: string,
});

const monmodel = mongoose.model("NEWCOL", sch);
