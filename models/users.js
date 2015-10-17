var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userService = require("../services/user-services");


var userSchema = new Schema({
	_id : { type: Number, required : "Enter the ID" , min:[10,"Not valid ID"] },
	firstname : { type: String, required : "Enter the First Name" },
	lastname : { type: String, required : "Enter the Last Name" },
	emailid : { type: String, required : "Enter the Email-ID" },
	password : { type: String, required : "Enter the Password" },
	created : {type : Date, default : Date.now }
});

userSchema.path("emailid").validate(function(value, next){
	userService.findUser(value,function (err, user) {
		if(err)
		{
			//console.log(err);
			return next(false);
		}
		next(!user);
	});
}, "The emailid is already in use");

var User = mongoose.model("users",userSchema);

module.exports = {
	User : User
};