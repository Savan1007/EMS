const express = require('express')
const router = express.Router()
const conn = require('../config/connection')
const config = require('../config/config')

router.get("/", function (req,res){
    conn.query("SELECT * FROM task", (err, result) =>{
        if(err) res.status(600);
        res.status(200).send(result);
    })
})

router.post('/', (req, res) => {
    conn.query("INSERT INTO task (task_title, task_desc, emp_id) VALUES (?,?,?)", [req.body.task_title, req.body.task_desc, req.body.emp_id], (err, result) => {
        if(err) res.status(600);
        res.status(200).send("done")
    })
    
})

router.put('/', (req, res) => {
    conn.query(
      "UPDATE task SET status = (?) WHERE emp_id=(?)",
      [req.body.status, req.body.emp_id],
      (err, result) => {
        if (err) throw err;
        res.status(200).send("Done");
      }
    )
}) 
module.exports = router
