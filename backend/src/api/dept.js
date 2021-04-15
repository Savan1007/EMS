const express = require('express')
const router = express.Router()
const conn = require('../config/connection')
const config = require('../config/config')

router.get('/', function(req,res){
    conn.query("SELECT * FROM dept", (err, result) =>{
        if(err) res.status(600);
        res.status(200).send(result);
    })
})

router.post('/', function(req, res){
    conn.query("INSERT INTO dept (dept_id, dept_name) VALUES (?,?)", [req.body.s], (err, result) => {
        if(err) res.status(605);
        res.status(200).send("done")
    })
})

module.exports = router