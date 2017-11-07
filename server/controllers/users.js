var mongoose = require('mongoose');
var User = mongoose.model('Message');
module.exports = {
  show: function(req, res) {
    User.find({}, function(err, posts) {
      res.render('message_board', {posts: posts});
    })
  },
  create: function(req, res) {
    var user = new User({name: req.body.name, quote: req.body.quote});
    user.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
    })
  }
}
