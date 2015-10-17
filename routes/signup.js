var express = require("express");
var router = express.Router();

var userService = require("../services/user-services");

router.get("/", function(req, res) {
    res.render("signup", {
        title: "SignUp Page"
    });
});

router.post("/", function(req, res) {
    //var data = "<h1>Data received</h1><ul><li>"+ req.body.emailid +"</li><li>"+ req.body.password +"</li></ul>"
    //res.send(data);
    var vm;
    //add req.body.id = 1;
    //var something=false;
    //if(something)
    userService.addUser(req.body, function(err) {
        if (err) {
            /*var str = err;
			var error = str.split(":");
			error = error[1].split(",");
			var fnlerr = "<ul>";
			for (var i = 0; error.length < 0; i++) {
				fnlerr = fnlerr + "<li>" + error[i] + "</li>";
			};
			fnlerr+="/<ul>";*/
            vm = {
                title: "Error Page",
                error: err //"Something Goes Wrong"
            };
            //console.log(err);
            res.render("signup", vm);
        } else {
            req.login(req.body, function(err) {
                res.redirect("/users");
            });
        }
    });
});

module.exports = router;