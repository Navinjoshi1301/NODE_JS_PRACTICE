const mongoose = require("mongoose");

// mongo db url

const mongooseUrl =
  "mongodb+srv://naveenjoshi:yhaaCTn12vcDuLoh@navin1.x7ujpop.mongodb.net/?retryWrites=true&w=majority&appName=navin1";

// setup Mongo connection

mongoose.connect(mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnecedt");
});

module.exports = db;