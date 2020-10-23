const HomeRoute = require('./app/routes/home.js');
var app = require('./config/server');

HomeRoute(app);

app.listen(5000, function() {
	console.log("Servidor on");
});