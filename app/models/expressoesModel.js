module.exports = function()
{
	this.getGiria = function(connection, callback)
	{
		connection.query('select * from expressao', callback); 
	}

	this.getGiria = function(connection, callback)
	{
		connection.query('select * from expressao where id_expressao = 1', callback);
	}

	this.salvarGiria = function(giria, connection, callback)
	{
		connection.query('insert into expressao set ?', giria, callback)
	}
	return this;
}
module.exports = function();