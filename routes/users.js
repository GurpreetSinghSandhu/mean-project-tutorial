var express = require("express");
var router = express.Router();
var restrict = require("../auth/restrict");
/*exports.users = function(req,res){
	res.send("<h1>From users router");
}*/

router.get("/", restrict, function(req, res) {
    //console.log(req.body);
    /*if (!req.user) {
        return res.redirect("/");
    }*/
    var vm = {
        title: "Users Page",
        input: req.user ? req.user : null
    };
    res.render("users", vm);
});

module.exports = router;