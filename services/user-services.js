var User = require("../models/users").User;

exports.addUser = function(user, next){
	var newUser = new User({
		_id : user.mid,
		firstname : user.firstname,
		lastname : user.lastname,
		emailid : user.emailid.toLowerCase(),
		password : user.password
	});

	newUser.save(function(err){
		if(err){
			return next(err);
		}
		next(null);
	});

};

exports.findUser = function(email, next){
	//console.log(email);
	User.findOne({emailid : email.toLowerCase()}, function(err, user){
		next(err, user);
	});
};