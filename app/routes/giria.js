module.exports = function(app){
	app.get('/add_giria', function(req,res)
	{
		res.render('girias/add');
	});

	app.post('/salvarGiria', function(req, res)
	{
		var giria = req.body;

		var connection = app.config.dbConnection();
		var expressoesModel = app.app.models.expressoesModel;

		expressoesModel.salvarGiria(giria, connection, function(error, result)
		{
			if(error){
				res.send(error)
			}else{
				res.redirect('/girias');
			}
		})
	});
}