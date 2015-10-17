module.exports = function () {
	var passport = require("passport");
	var passportLocal = require("passport-local");
	var userService = require("../services/user-services");

	passport.use(new passportLocal.Strategy({ usernameField: "email" },function (email, password, next) {
		//console.log("e" + email);
		//console.log("f" + password);
		userService.findUser(email,function (err, user) {//here is problem
			//console.log("a1" + user.emailid);
			if(err){
				return next(err);
			}
			//console.log("a2" + user.password);
			if(!user || user.password !== password){
				return next(null,null);
			}
			next(null, user);
		});
	}));

	passport.serializeUser(function (user, next) {
		//console.log("a" + user.emailid);
		next(null, user.emailid);
	});

	passport.deserializeUser(function (email, next) {
		//console.log("b" + user);
		userService.findUser(email,function (err, user) {
			//console.log("c" + err);
			//console.log("d" + user.emailid);
			next(err, user);
		});
	});
};