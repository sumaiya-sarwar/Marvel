require("dotenv").config();
require('./config/db.connection')
const { PORT } = process.env;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const morgan = require("morgan");

const charactersController = require('./controllers/character_controller');
const Characters = require("./models/characters");




// MIDDLEWARE
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development


app.use('/characters', Characters)

// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

  app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));