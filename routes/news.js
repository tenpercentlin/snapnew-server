/*
 * GET home page.
 */
var history = [];

exports.index = function(req, res){
  res.send(history);
  res.end();
};

exports.create = function(req, res){
	var photo = req.query.photo;
	var title = req.query.title;

	history.push({
		"photo": photo,
		"title": title
	});

	res.send({
		"status": "ok"
	});
  	res.end();
};