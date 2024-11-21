const mangoose = require("mangoose");

const alienSchema = new mangoose.Schema({
    name: String,
    type: String,
    description: String,
    habitat: String,
    imgUrl: URL
});

module.exports = mangoose.model("Alien", alienSchema)