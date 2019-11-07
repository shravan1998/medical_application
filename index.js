const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
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

let router  = express.Router();

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Allow-Access-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Allow-Access-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});

app.post('/api/invoice',function(req,res){
    let sqlinsert = 'INSERT INTO `invoicing`(`master`,`item`,`item_name`,`branch`,`expiry`,`quantity`,`discount`,`sales_rt`,`mrp`'+
                '`cgst`,`sgst`,`amount`,`dosage`,`doctor_id`,`customer_id`,`payment`,`net_amount`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    connection.query(
        sqlinsert,
        [req.body.master,req.body.item,req.body.itemname,req.body.branch,req.body.expiry,req.body.quantity,req.body.disc,
        req.body.salesrt,req.body.mrpbox,req.body.cgst,req.body.sgst,req.body.dosage,req.body.doctorid,req.body.customerid,
        req.body.netamount
        ],(err,res)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
            }
        }
    );
});

app.listen(8000,function(){
    console.log("Runs at 8000");
});