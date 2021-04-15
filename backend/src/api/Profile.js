const express = require('express')
const router = express.Router()
const conn = require('../config/connection')
const config = require('../config/config')

router.get("/", function (req,res){
    conn.query("SELECT * FROM employee", (err, result) =>{
        if(err) res.status(600);
        res.status(200).send(result);
    })
})

router.put('/edit', (req, res) => {
    conn.query(
        "UPDATE employee SET gender = (?), phone_no = (?), address = (?), acc_no = (?) WHERE emp_id=(?)",
        [req.body.gender, req.body.phone_no, req.body.address, req.body.acc_no, req.body.emp_id],
        (err, result) => {
            if (err) throw err;
            res.status(200).send("Done");
        }
    );
});

module.exports = router