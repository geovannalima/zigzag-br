<<<<<<< HEAD
module.exports = function(app)
{
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
=======
/*giria e add giria*/
module.exports = function (app) {
  app.get("/add_giria", function (req, res) {
    res.render("girias/add");

  //app.post('/salvarGiria', function(req, res) {
	
	});
};
>>>>>>> a956aa1... Importação
