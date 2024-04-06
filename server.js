const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("welcome to the world");
});

app.get("/about", (req, res) => {
  res.send("this is the about page");
});

app.get("/contact", (req, res) => {
    var detail={
        name:'navin',
        age:23,
        gender:'male'
    }
    res.send(detail);
})
app.listen(3000,()=>{
    console.log("server listening on port 3000");
});
