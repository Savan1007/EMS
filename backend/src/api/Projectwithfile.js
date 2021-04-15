const express = require('express')
const router = express.Router()
const conn = require('../config/connection')
const config = require('../config/config')
const multer = require('multer')
// import '../../uploads'
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, "file" + "-" + file.originalname);
    },
});
  
var upload = multer({ storage: storage }).single("file");
router.post("/upload", (req, res) => {
    console.log("Request Received");
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500);
      }
      return res.status(200).send("hi");
    });
});

module.exports = router
