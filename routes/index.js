var express = require("express");
var router = express.Router();

/*exports.index = function(req,res){
	res.send("<h1>From index router");
}*/

router.get("/",function(req,res){
	if(req.user)
	{
		return res.redirect("/users");
	}
	res.render("index",{
		title : "Index Page"
	});
});

router.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});



module.exports = router;