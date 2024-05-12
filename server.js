const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/person");
const bodyParser = require("body-parser");
const NodeCache = require("node-cache");
const MyCache = new NodeCache();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("welcome to the world");
});

// POST method to create a person

app.post("/person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    MyCache.del("persons");
    console.log("data saved successfully ", response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  Get person meth

app.get("/person", async (req, res) => {
  try {
    let data;
    if (MyCache.has("persons")) {
      console.log(1);
      data = JSON.parse(MyCache.get("persons"));
    } else {
      data = await Person.find();
      MyCache.set("persons", JSON.stringify(data));
    }
    console.log("data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
