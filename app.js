const HomeRoute = require("./app/routes/home.js");
var app = require("./config/server");
<<<<<<< HEAD

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
=======
app.set("view engine", "ejs");
app.set("views", "./app/views");
HomeRoute(app);
app.listen(5000, function (){
  console.log("Servidor on");
});
>>>>>>> cfdcb545e3e2ce642a9e07c5d9752bac2242412b
