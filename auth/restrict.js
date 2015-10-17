module.exports = function(req, res, next) {
	//console.log("a");
    if (req.isAuthenticated()) {
        return next();
    }
    //console.log("b");
    res.redirect("/");
}