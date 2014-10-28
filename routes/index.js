var express = require('express');
var router = express.Router();
var Datastore = require('nedb'),
    db = {};

db.users = new Datastore({filename: 'users.db', autoload: true});


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/pages', function(req, res) {
  var pages = [
    {
      title: 'Main',
      link: '/'
    },
    {
      title: 'Users',
      link: '/users'
    },
    {
      title: 'Posts',
      link: '/posts'
    }
  ];
  res.send(pages);
});

router.get('/users', function(req, res) {
  db.users.find({}, function(err, foundUsers) {
    if(err) {
      return res.send({status: 500, err: err}, 500);
    }
    res.send(foundUsers);
  });
});

module.exports = router;
