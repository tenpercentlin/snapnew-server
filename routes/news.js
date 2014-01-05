/*
 * GET home page.
 */

exports.index = function(req, res){
  var obj = { photo: 'test'};

  res.send(obj);
};
