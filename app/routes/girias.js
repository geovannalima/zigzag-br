module.exports = function(app)
{
<<<<<<< HEAD
	app.get('/giria', function(req,res)
	{
		var connection = app.config.dbConnection();
		var expressoesModel = app.app.models.expressoesModel;

		expressoesModel.getGiria(connection, function(error, result)
		{
			res.render('girias/giria', {girias : result});
		})
	});
}
/*giria e add giria*/
module.exports = function (app) {
  app.get("/add_giria", function (req, res) {
    res.render("girias/add");
=======
	app.get('/girias', function(req,res)
	{
		var connection = app.config.dbConnection();
		var expressoesModel = app.app.models.expressoesModel;
>>>>>>> b696285... Segundo commit: css, select e index

		expressoesModel.getGiria(connection, function(error, result)
		{
			res.render('girias/giria', {girias : result});
		})
	});
}