const express = require('express')
const router = express.Router()
const conn = require('../config/connection')
const config = require('../config/config')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", function(req, res) {
    conn.query("SELECT * FROM employee", (err, result) => {
        if (err) res.status(600);
        res.status(200).send(result);
    })
})

router.post('/', (req, res) => {
    conn.query("INSERT INTO employee (emp_id, emp_name, email, emp_desig, emp_salary, dept_name) VALUES (?,?,?,?,?,?)", [req.body.emp_id, req.body.emp_name, req.body.email, req.body.emp_desig, req.body.emp_salary, req.body.dept_name], (err, result) => {
        if (err) res.status(600);
        res.status(200).send("done")
    })

})

module.exports = router





// router.post('/', function(req,res) {
//     conn.query("INSERT INTO employee (userid, emp_name, gender, email, phone_no, address, emp_desig, emp_salary, acc_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.userid, req.body.emp_name, req.body.gender, req.body.email, req.body.phone_no, req.body.address, req.body.emp_desig, req.body.emp_salary, req.body.acc_no], (err, result) =>{
//         if(err) res.status(605);
//         res.status(200).send("done")
//     } )
// } )





// {
//     "userid": "emp001",
//     "emp_name": "Savan Pedhadiya",
//     "dob": "2002-03-13",
//     "gender": "Male",
//     "email": "savanpedhadiya85@gmail.com",
//     "phone_no": "9726250924",
//     "address": "surat",
//     "emp_desig": "SDE",
//     "emp_salary": "100000",
//     "acc_no": "123456789"
// }

// conn.query("INSERT INTO employee (emp_id, emp_name, gender, email, phone_no, address, emp_desig, emp_salary, acc_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.emp_id, req.body.emp_name, req.body.gender, req.body.email, req.body.phone_no, req.body.address, req.body.emp_desig, req.body.emp_salary, req.body.acc_no], (err, result) =>{
//     if(err) res.status(605);
//     res.status(200).send("done")
// } )