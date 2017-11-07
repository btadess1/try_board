var posts = require('../controllers/posts.js');
module.exports = function(app) {
	
 	//route for displaying the message board
	app.get('/message/board', function(req, res){
	  	posts.display(req, res);
	 })   
	// route for creating one comment with the parent post id
	app.post('/post/comment/:id', function (req, res){
	  	posts.comment(req, res);
	});
	//rout for posting a message
	app.post('/post/message', function(req, res){
		posts.post_message(req, res);
	})

}
