var express = require ("express");

var app  = express();

app.set('view engine', 'pug');

app.use('/public', express.static('public'));

app.get("/", function(req, res){
	res.render("home.pug");
});

app.get("/birds", function(req, res){
	res.render('birds.pug');
});

app.get("/bestever/:sport", function(req, res){
	var sport = req.params.sport;
	res.render('sport.pug', {sportVar: sport});
});

// Open express on port 3000
app.listen(3000, function(){
	console.log("Port 3000 is now serving app.js");
});