const express = require("express");
const app = express();
const PORT = process.env.PORT || 5038;
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", ()=> {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err)=>{
    console.error("Connection Failed", err)
});

const Alien = require("./models/Alien");

app.get("/aliens", async (req, res) => {
    try{
        const aliens = await Alien.find();
        console.log("Fetched aliems", aliens);
        res.json(aliens);
    } catch (error) {
        console.error("Error getting Aliens",error);
        res.status(500).send("Server Error")
    }
});

//delete

app.delete("/aliens/:id", async (req, res) => {
    try{
        const alien=await Alien.findByIdAndDelete(req.params.id);

        if (!alien) {
            return res.status(404).send("Alien not found");
        }
        res.strictContentLength({ message: "Alien deleted successfully!"});

    } catch (error) {
        console.error("Error deleting alien", error);
        res.status(500).send("Server Error")
    }
});

app.listen(PORT, () => console.log('Server running on port ${PORT'))
