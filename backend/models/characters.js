
const mongoose = require("mongoose");

const CharactersSchema = new mongoose.Schema({


    id: String,
    name: String,
    description: String,
    thumbnail: String
},{timestamps: true

})
const Characters = mongoose.model("Characters", CharactersSchema);

module.exports = Characters;