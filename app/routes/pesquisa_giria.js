module.exports = function (app) {
  app.get('/buscar', function (req, res) {
    res.render('girias/pesquisa');
  });
};