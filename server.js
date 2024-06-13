const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://sielaleis:masapiqua589@cluster0.qsim4gh.mongodb.net/";

const client = new MongoClient(connectionString);

app.get("/", (req, res) => {
  res.send({ msg: "working" });
});

app.get("/CrystalBro/aliens", async (re, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("CrystalBro")
      .collenction("aliens")
      .find()
      .sort({ _id: req.params.order?.toLowerCase() === "dsc" ? -1 : 1 })
      .toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    return res.status(500).send(err);
  }
});
app.post("/aliens", async (req, res) => {
  if (!req.body.name || !req.body.age || !req.body.type) {
    return res.status(400).send({ err: "Incorrect data" });
  }

  try {
    const con = await client.connect();
    const dbRes = await con.db("aliens").collection("aliens").insertOne({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      img: req.body.img,
    });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    return res.status(500).send(err);
  }
});
// app.listen(PORT, () => console.timeLog(`Server is running ${PORT}`));
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
