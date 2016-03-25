//this is our friends.js file located at /server/controllers/friends.js

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
//note the immediate function and the object that is returned
// Edit the show method as follows
module.exports = (function() {
	return {
		index: function(req, res) {
			Friend.find({}, function(err, results) {
				if(err) {
				console.log('error error', err);
				} 
				else {
				//console.log('got it', results);
				res.json(results);
				}
			});
		},
		create: function(req, res){
			//console.log(req.body, 'check');
			var newFriend = new Friend({name: req.body.name, age: req.body.age});
			// console.log(req.body);
			newFriend.save(function(err, results){
				if(err){
					console.log("Didn't create that friend");
				}
				else{
					//console.log(results);
					res.json(results);
				}
			});
		},
		delete: function(req, res){
			Friend.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log("Didn't delete the friend", results);
				}
				else {
					console.log('Deleted!!');
					res.json(results);
				}
			})
		}
	}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports


