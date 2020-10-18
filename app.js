const HomeRoute = require("./app/routes/home.js");
var app = require("./config/server");

app.set("view engine", "ejs");

app.set("views", "./app/views");

HomeRoute(app);
<<<<<<< HEAD
app.listen(5000, function () {
	console.log("Servidor on");
=======
app.listen(5000, function (){
  console.log("Servidor on");
>>>>>>> cfdcb54... Segundo commit: syle.css, giria.ejs e select
});
var app = require('./config/server');

app.listen(5000, function(){
	console.log("Servidor on");
});