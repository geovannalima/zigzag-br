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