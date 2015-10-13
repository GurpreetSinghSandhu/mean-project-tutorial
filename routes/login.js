var express = require("express");
var router = express.Router();

/*exports.index = function(req,res){
	res.send("<h1>From index router");
}*/

router.get("/",function(req,res){
	res.render("login",{
		title : "Login Page"
	});
});

router.post("/",function(req,res){
	//var data = "<h1>Data received</h1><ul><li>"+ req.body.emailid +"</li><li>"+ req.body.password +"</li></ul>"
	//res.send(data);
	res.render("users",{
		title : "Welcome Page",
		emailid : req.body.emailid,
		password : req.body.password
	});
});

module.exports = router;