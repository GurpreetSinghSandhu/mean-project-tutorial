var express = require("express");
var router = express.Router();

/*exports.index = function(req,res){
	res.send("<h1>From index router");
}*/

router.get("/",function(req,res){
	res.render("index",{
		title : "Index Page"
	});
});

module.exports = router;