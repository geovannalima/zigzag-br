var express = require('express'); // Importa o express para o projeto;
var consign = require('consign'); // Importa o módulo do consign;
var bodyParser = require('body-parser') 

var app = express(); // Chama a função para executar o express;

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true})) // Dá um parâmetro ao bodyparser (dados em 
//JSON);

consign()
	.include('app/routes') // autoload de rotas;
	.then('config/dbConnection.js') // conexão com banco;
	.then('app/models')
	.into(app); // Consign reconhece todos os arquivos da routes;

module.exports = app; // Módulo retorna a variável app;