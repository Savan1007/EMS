const express = require('express')
const router = express.Router()
const conn = require('../config/connection')
const config = require('../config/config')

router.get("/", function(req, res) {
    conn.query("SELECT * FROM project", (err, result) => {
        if (err) res.status(600);
        res.status(200).send(result);
    })
})

router.post('/', (req, res) => {
    conn.query("INSERT INTO project (proj_id, proj_name, proj_doc, dept_id) VALUES (?,?,?,?)", [req.body.proj_id, req.body.proj_name, req.body.proj_doc, req.body.dept_id], (err, result) => {
        if (err) res.status(600);
        res.status(200).send("done")
    })

})

module.exports = router