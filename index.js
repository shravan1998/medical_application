const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: 'password',
    database:"medical_application"
});
connection.connect(function(err){
    if(err){
        console.log(err);
    }
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/'));
app.use(cors());

let router  = express.Router();

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Allow-Access-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Allow-Access-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});

app.post('/api/invoice',function(req,res){
    let sqlinsert = 'INSERT INTO `invoicing`(`master`,`disc`,`item`,`item_name`,`branch`,`expiry`,`quantity`,`sales_rt`,`mrp`,`cgst`,`sgst`,`amount`,`dosage`,`net_amount`,`doctor_id`,`customer_id`,`address`,`payment`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    connection.query(
        sqlinsert,
        [req.body.master,req.body.disc,req.body.item,req.body.itemname,req.body.branch,req.body.expiry,req.body.quantity,
        req.body.salesrt,req.body.mrpbox,req.body.cgst,req.body.sgst,req.body.amount,req.body.dosage, req.body.netamount,req.body.doctorid,req.body.customerid,
     req.body.address,req.body.payment
        ],(err,data)=>{
            
            if(err){
                console.log(err);
            }
            else{
                
                console.log(data);
            }
        }
    );
});

app.get('/api/invoice',function(req,res){
    let sqlget= 'SELECT * FROM `invoicing`';
    connection.query(sqlget,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log(data);
        }
    });
});
app.get('/api/alternative',function(req,res){
    let sqlget= 'SELECT * FROM `alternative`';
    connection.query(sqlget,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log(data);
        }
    });
});
app.post('/api/debit-note',function(req,res){
    let sqlinsert = 'INSERT INTO `debit_note`(`Grp`,`item`,`branch`,`quantity_pack`,`mf`,`exp`,`quantity`,`disc`,`ref_bill`,`ref_bill_dt`,`supplier_name`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)';

    connection.query(sqlinsert,,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log(data);
        }
    });
});

app.get('/api/debit-note',function(req,res){
    let sqlget = 'SELECT * FROM `debit_note`';
    connection.query(sqlget,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log(data);
        }
    });
});
app.listen(8000,function(){
    console.log("Runs at 8000");
});