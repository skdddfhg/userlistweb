var express = require('express');
var router = express.Router();
var mysql = require('mysql');
require('dotenv').config();

var db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PW,
    database:process.env.DB_NAME
});

router.get('/topic/add', (req, res)=>{
    var sql = 'SELECT * FROM topic'
    db.query(sql, (err, result)=>{
        if(!err){
            console.log(result)
        }
        else{
            console.log(err)
        }
    })
    res.render('add', {})
})

module.exports = router;