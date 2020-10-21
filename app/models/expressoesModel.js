module.exports = function()
{
	this.getGiria = function(connection, callback)
	{
<<<<<<< HEAD
<<<<<<< HEAD
		connection.query('select * from expressao', callback); 
=======
		connection.query('select * from expressao order by data_criacao desc', callback); 
>>>>>>> b696285... Segundo commit: css, select e index
=======
		connection.query('select * from expressao order by data_criacao desc', callback); 
>>>>>>> cfdcb545e3e2ce642a9e07c5d9752bac2242412b
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
<<<<<<< HEAD
<<<<<<< HEAD
}
module.exports = function();
=======
}
>>>>>>> b696285... Segundo commit: css, select e index
=======
}
>>>>>>> cfdcb545e3e2ce642a9e07c5d9752bac2242412b
