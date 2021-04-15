const mysql = require('mysql')

const conn = mysql.createConnection({
    user: "root",
    password: "",
    database: "emplo-eye",
    host: "localhost",
    port: 3309
})

conn.connect((err) => {
    if (err) console.log(err)
    console.log("connected with database")
})

module.exports = conn;