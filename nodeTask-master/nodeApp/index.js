var express = require("express");
require('dotenv').config();
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoodb = require("mongoose"); 

const mongoURI = process.env.MONGO_URL
var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

mongoodb.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

var Users = require("./routes/routes");

app.use("/v1", Users);


app.listen(port, function () {
    console.log("Server is running on port: " + port);
});
