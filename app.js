const HomeRoute = require("./app/routes/home.js");
var app = require("./config/server");
app.set("view engine", "ejs");
app.set("views", "./app/views");
HomeRoute(app);
app.listen(5000, function () {
  console.log("Servidor on");
});
var app = require('./config/server');

app.listen(5000, function(){
	console.log("Servidor on");
});