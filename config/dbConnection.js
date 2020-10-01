var mysql = require('mysql');

var connMySQL = function()
	{
		console.log('Conexão com o BD foi estabelecida');
		return mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'zigzagbr',
	});
	}
module.exports = function()
{
	console.log('O autoload carregou o dbConnection');
	return connMySQL;
}