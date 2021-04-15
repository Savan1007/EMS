const express = require('express')
const router = express.Router()
const conn = require('../config/connection')
const config = require('../config/config')
const { route } = require('./addEmp')

router.get('/', (req, res) => {
    conn.query("SELECT * FROM leaves WHERE status = \"pending\"", (err, result) => {
        if (err) res.status(600);
        res.status(200).send(result);
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    conn.query("INSERT INTO leaves (sdate, edate, reason, emp_id) VALUES (?,?,?,?)", [req.body.sdate, req.body.edate, req.body.reason, req.body.emp_id], (err, result) => {
        if (err) res.status(600);
        res.status(200).send("Done")
    })
})

router.put('/', (req, res) => {
    conn.query(
        "UPDATE leaves SET status = (?) WHERE emp_id=(?)", [req.body.status, req.body.emp_id],
        (err, result) => {
            if (err) throw err;
            console.log(req.body.updatedTask);
            res.status(200).send("Done");
        }
    );
});

module.exports = router