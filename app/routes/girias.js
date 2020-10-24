module.exports = function(app) {
	app.get('/girias', function(req,res)
	{
		var connection = app.config.dbConnection();
		var expressoesDAO = app.app.models.expressoesDAO;

		noticiasModel.getGiria(connection, function(error, result)
		{
			res.render('girias/girias', {girias : result});
		})
	});
}

module.exports = function(app)
{
	//var connection = dbConnection();
	app.get('/giria', function(req,res)
	{
		app.app.controllers.noticias.noticia(app, req, res); //noticias*****
	});

	app.get('/girias', function(req,res)
	{
		app.app.controllers.noticias.noticias(app, req, res);
	});

	app.post('/busca', function(req,res)
	{
		app.app.controllers.noticias.busca(app, req, res);
	});

	app.get('/arquivar', function(req,res)
	{
		app.app.controllers.noticias.excluir(app, req, res);
	});
}