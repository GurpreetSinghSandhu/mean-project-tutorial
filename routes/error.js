var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
	//console.log("hello");
	res.render("error",{
		title : "Error",
		error_code : 404,
		result : "Page Not Found"
	});
});

module.exports = router;