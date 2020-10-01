module.exports = function (app) {
  app.get('/minha_conta', function (req, res) {
    res.render('user/conta');
  });
};