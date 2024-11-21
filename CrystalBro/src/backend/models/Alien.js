const mangoose = require("mangoose");

const alienSchema = new mangoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    habitat: {type: String, required: true},
    imgUrl: {type: String, required: true}
});

module.exports = mangoose.model("Alien", alienSchema)