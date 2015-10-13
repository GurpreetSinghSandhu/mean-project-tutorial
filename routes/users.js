var express = require("express");
var router = express.Router();

/*exports.users = function(req,res){
	res.send("<h1>From users router");
}*/

router.get("/",function(req,res){
	res.render("users",{
		title : "Users Page"
	});
});

module.exports = router;