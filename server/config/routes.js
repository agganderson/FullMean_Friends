//this is our routes.js file located in server/config/routes.js
//this is where we will define all of our routing rules
var friends = require('./../controllers/friends.js');
//we will have to require this in the server.js file (and pass it app)
module.exports = function(app){
	//verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
	app.get('/friends', function(req, res){
		friends.index(req, res);
	});
	app.post('/friends', function(req, res){
		friends.create(req, res);
	});
	app.post('/delete/:id', function(req, res){
		friends.delete(req, res);
	});
};