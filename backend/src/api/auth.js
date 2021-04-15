const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const conn = require('../config/connection')
const config = require('../config/config')

router.get("/", function (req,res){
    conn.query("SELECT * FROM auth", (err, result) =>{
        if(err) res.status(600);
        res.status(200).send(result);
    })
})

router.post("/signUp", (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            conn.query(
            "INSERT INTO auth (userid , password) VALUES ( ? , ? )",
            [req.body.userid, hash],
            (err, result) => {
                if (err) console.log(err);
                console.log(req.body.userid);
                let token = jwt.sign({ userid: req.body.userid }, config.secret, {
                expiresIn: 86400,
                });
                res.status(200).send({ auth: true, token: token });
            }
            );
        });
    });
});
  

router.post("/login", (req, res) => {
    console.log(req.body.userid)
    conn.query(
        "SELECT password FROM auth WHERE userid = (?)",
        [req.body.userid],
        (err, result) => {
            if (err) throw err;
            console.log("RESULT" + result)
            if (result.length === 0)
            return res.send({ auth: false, message: "No User Exists" });
            let hash = result[0].password;
    
            bcrypt.compare(req.body.password, hash, function (err, resp) {
                if (resp === true) {
                    var token = jwt.sign({ userid: req.body.userid }, config.secret, {
                    expiresIn: 86400, // expires in 24 hours
                    });
                    res.status(200).send({ auth: true, token: token });
                } else {
                    res
                    .status(400)
                    .send({ auth: false, message: "Username or Password is wrong" });
                }
            });
        }
    );
});

module.exports = router
