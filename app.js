//var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var passport = require("passport");
var expressSession = require("express-session");
var restrict = require("./auth/restrict");
var flash = require("connect-flash");

var app = express();

var config = require("./config");
var error = require("./routes/error");
var routes = require("./routes/index");
var users = require("./routes/users");
var login = require("./routes/login");
var signup = require("./routes/signup");

mongoose.connect(config.mongoUri);

var passportConfig = require("./auth/passport-config");
passportConfig();


app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use(expressSession(
	{
		secret : "hello my frnds",
		saveUninitailized : false,
		resave : false
	}
));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use( bodyParser.json());       
app.use(bodyParser.urlencoded({
  extended: true
}));

/*var server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.end("<b>Welcome</b>");
});

app.get("/",function(req,res){
	res.send("<b>It's me</b>");
});*/

app.use("/",routes);
app.use("/login",login);
app.use("/signup",signup);
//app.use(restrict);
app.use("/users",users);
app.use("/logout",routes);
app.use("*",error);


//development error handler
if(app.get("env") == "environment" ){
	app.use(function(err,req,res,next){
		res.status(err.status || 500);
		res.render("error",{
			message : err.message,
			error : err
		});
	});
}

app.use(function(err,req,res,next){
	res.status(err.status || 500);
	res.render("error",{
		message : err.message,
		error : err.message,
		title :"Error"
	});
});



var server = app.listen(3000, "localhost",function(err){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("Server is running at 3000");
	}
});