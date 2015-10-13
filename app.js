//var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();


var error = require("./routes/error");
var routes = require("./routes/index");
//var users = require("./routes/users");
var login = require("./routes/login");


app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

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
//app.use("/users",users);
app.use("/login",login);
app.use("*",error);

var server = app.listen(process.env.PORT, process.env.IP,function(){
	console.log("Server is running at 3000");
});