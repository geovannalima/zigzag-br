module.exports = function(app) {
	app.get('/add_giria', function(req,res)
	{
		res.render('girias/add');
	});

	app.post('/salvarGiria', function(req, res)
	{
		var giria = req.body;

		var connection = app.config.dbConnection();
		var expressoesDAO = app.app.models.expressoesDAO;

		expressoesDAO.salvarGiria(giria, connection, function(error, result)
		{
			if(error){
				res.send(error)
			}else{
				res.redirect('/girias');
			}
		})
	});
}