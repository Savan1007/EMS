const express = require("express")
const App = express()
const PORT = 5678
const connectDB = require('./src/config/connection')
const cors = require('cors')
const multer = require('multer')

App.use(express.json())
App.use(cors())

App.use("/api/addEmp",require("./src/api/addEmp.js"))
App.use("/api/profile",require("./src/api/Profile.js"))
App.use("/api/leave",require("./src/api/takeleave.js"))
App.use("/api/auth", require("./src/api/auth"))
App.use("/api/project", require("./src/api/Project.js"))
App.use("/api/task", require("./src/api/task.js"))

App.listen(PORT, () => {
    console.log("Server Running : http://localhost:" + PORT)
})


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, "file" + "-" + file.originalname);
//     },
//   });
  
// var upload = multer({ storage: storage }).single("file");
// App.post("/upload", (req, res) => {
//     console.log("Request Received");
//     upload(req, res, function (err) {
//       if (err instanceof multer.MulterError) {
//         return res.status(500);
//       }
//       return res.status(200).send("hi");
//     });
//   });
