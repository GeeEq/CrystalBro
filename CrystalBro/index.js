// const express = require("express");
// const Mongoclient = require("mongodb").MongoClient;
// const cors = require("cors");
// const multer = require("multer");
// const mongodb = require("mongodb");
// const app = express();
// app.use(cors());
// app.use(express.json());

// const CONNECTION_STRING =
//   "mongodb+srv://sielaleis:masapiqua589@cluster0.qsim4gh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const DATABASE = "crystalbro";
// let database;

// app.listen(5038, () => {
//   Mongoclient.connect(CONNECTION_STRING, (error, client) => {
//     database = client.db(CrystalBro);
//     console.log("Mongo DB Connection Seccessful");
//   });
// });

import express, { json } from "express";
import cors from "cors";
import mongodb from "mongodb";
import multer from "multer";
// const MongoClient = mongodb.MongoClient;
const PORT = 5038;
const app = express();
app.use(cors());
app.use(express.json());

import { MongoClient } from "mongodb";
import { request } from "http";
// import { request } from "http";

const connectionString =
  "mongodb+srv://sielaleis:mangojerry@cluster0.qsim4gh.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
let db;
// let database;

async function connect() {
  try {
    conn = await client.connect();
    db = conn.db("CrystalBro");
  } catch (e) {
    console.error(e);
  }
}
connect();

app.get("/aliens", (request, response) => {
  db.collection("CrystalBro")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});

app.get("/dragons", (request, response) => {
  db.collection("CrystalBro")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});

app.get("/crystals", (request, response) => {
  db.collection("CrystalBro")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});

app.post("/aliens/AddAlien", multer().none(), (request, response) => {
  db.collection("aliens").count({}, function (error, numOfDocs) {
    db.collection("aliens").insertOne({
      id: (numOfDocs + 1).toString(),
      name: request.body.newNotes,
      type: request.body.newNotes,
      description: request.body.newNotes,
      habitat: request.body.newNotes,
      imgUrl: request.body.newNotes,
    });
    response.json("Added Seccessfully");
  });
});

app.delete("/CrystalBro", (request, response) => {
  db.collection("aliens").deletOne({
    id: request.query.id,
  });
  response.json("Deleted Seccessfully");
});

// app.post("/aliens/create_user", async (req, res) => {
//   try {
//     await connect();
//     const collection = db.collection("aliens");
//     const newUser = req.body;
//     const result = await collection.insertOne(newUser);
//     res.json({ message: "User created!" });
//   } catch (e) {
//     console.log(e);
//   }
// });
// app.post("/crystals/create_user", async (req, res) => {
//   try {
//     await connect();
//     const collection = db.collection("crystals");
//     const newUser = req.body;
//     const result = await collection.insertOne(newUser);
//     res.json({ message: "User created!" });
//   } catch (e) {
//     console.log(e);
//   }
// });
// app.post("/dragons/create_user", async (req, res) => {
//   try {
//     await connect();
//     const collection = db.collection("dragons");
//     const newUser = req.body;
//     const result = await collection.insertOne(newUser);
//     res.json({ message: "User created!" });
//   } catch (e) {
//     console.log(e);
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     await connect();
//     let objectId = new ObjectId(req.params.id);
//     let collection = await db.collection("users");
//     await collection.deleteOne({
//       _id: objectId,
//     });
//     res.json({ message: " User deleted!" });
//   } catch (e) {
//     res.json(e);
//   }
// });

const startCallback = () => {
  console.log("Application started...");
};

app.listen(PORT, startCallback);