var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = {
	display: function(req, res){
		Post.find({}, function(err, post){
  			res.render('index', {post: post});
  		});
	}, 
	post_message: function(req, res){
		var post = new Post({name: req.body.name, text: req.body.message});
  		post.save(function(err){
      		if(err) { console.log('Error'); } 
      		else { res.redirect('/message/board'); }
  		})
	},
	comment: function(req, res){
		Post.findOne({_id: req.params.id}, function(err, post){
	        var comment = {name: req.body.name, text: req.body.comment};
	         
	        post.comments.push(comment);
	        
	            post.save(function(err){
	                if(err) { console.log('Error'); } 
	                else { res.redirect('/message/board'); }
	            });
	   	});
	}
}