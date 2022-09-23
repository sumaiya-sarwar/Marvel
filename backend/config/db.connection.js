const mongoose = require('mongoose');
const {MONGO_DB} = process.env
console.log("Connected to: "+ MONGO_DB)
///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGO_DB, (msg)=>console.log(`${msg}`))

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));