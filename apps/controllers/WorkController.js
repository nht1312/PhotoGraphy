var express = require("express");
var router = express.Router();

router.use("/", function(req,res){
    res.render("work");
});

module.exports = router;