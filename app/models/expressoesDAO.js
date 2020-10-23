function expressoesDAO(connection){
	conn = connection;

	this.getGirias = function(callback)
	{
		conn.query('select * from expressao order by id_noticia desc', callback);
	}

	this.getGiria = function(giria, callback)
	{
		conn.query('select * from expressao where id_expressao = ' + giria.id_giria, callback);
	}

	this.buscaGiria = function(pesquisa, callback)
	{
		conn.query("select * from expressao where explic like '%" + pesquisa + "%' order by data_criacao desc", callback);
	}

	this.arquivarNoticia = function(giria_arquivar, callback)
	{
		conn.query('delete from noticias where id_noticia = '+ noticia_excluir.id_noticia, callback);
	}

	this.salvarGiria = function(giria, callback)
	{
		conn.query('insert into expressao set ?', giria, callback);
	}
	return this;
}
module.exports = function()
{
	return expressoesDAO;
}