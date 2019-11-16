const express = require('express');
const app = express();
const path = require("path");

// Middleware to Config templating
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "dev/views"));
app.use(express.static(path.join(__dirname, "dev/public")));

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/contact', (req, res) => {
    res.send("Contact page");
});

app.listen(4200, console.log("Server running..."));