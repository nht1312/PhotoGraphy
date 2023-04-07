//import 
var express = require('express');
var router = express.Router();

// Home
router.use("/home", require(__dirname + "/HomeController"));
router.use("/gallery", require(__dirname + "/GalleryController"));
router.use("/work", require(__dirname + "/WorkController"));
router.use("/contact", require(__dirname + "/ContactController"));
router.use("/blog", require(__dirname + "/BlogController"));
router.use("/single", require(__dirname + "/SingleController"));


//export 
module.exports = router;