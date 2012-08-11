
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.login = function(req, res) {
  var user = req.params.user;
  var pass = req.params.pass;
  res.render('index', { title: 'Express' });
};
