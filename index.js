const express = require("express");
const mysql = require("mysql");

const app = express();

app.listen(8000,function(){
    console.log("Runs at 8000");
});