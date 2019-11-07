const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const connection = mysql.createConnection({
    host: "localhost",
    username: "root",
    password: "",
    database:"medical_application"
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/'));
app.use(cors());


app.listen(8000,function(){
    console.log("Runs at 8000");
});