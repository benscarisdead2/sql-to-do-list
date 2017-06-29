const express = require("express");
const models = require("./models")
const routes = require("./routes/router.js");
const mustache = require('mustache-express');

const session = require("express-session");
const bodyParser = require("body-parser");
const validator = require("express-validator");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine("mustache", mustache());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());

app.use(routes);

app.listen(3000, function(req, res) {
    console.log("Hello world.")
});

