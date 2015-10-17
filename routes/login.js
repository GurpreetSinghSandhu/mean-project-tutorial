var express = require("express");
var router = express.Router();
var passport = require("passport");

/*exports.index = function(req,res){
	res.send("<h1>From index router");
}*/

router.get("/",function(req,res){
	res.render("login",{
		title : "Login Page",
		error : req.flash("error")
	});
});

/*router.post("/",function(req,res){
	//var data = "<h1>Data received</h1><ul><li>"+ req.body.emailid +"</li><li>"+ req.body.password +"</li></ul>"
	//res.send(data);
	var SomethingGoesWrong = false;
	if(SomethingGoesWrong)
	{
		var vm = {
			title : "Welcome Page",
			input : req.body,
			error : "Something Goes Wrong"
		};
		delete vm.input.password;
		res.render("login",vm);
	}
	else
	{
		delete req.body.password;
		res.render("users",{
			title : "Login Page",
			input : req.body
		});	
	}

});*/

router.post("/", passport.authenticate('local',{
	failureRedirect: "/login",
	successRedirect: "/users",
	failureFlash : "Invalid Credentials"
}));//, 
	/*function (req,res,next) {
	//console.log("www")
	//res.redirect("/users");
	/*res.render("users",{
		title : "Users Page",
		input : req.body
	});
});*/

module.exports = router;