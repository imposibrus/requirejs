var express = require('express');
var router = express.Router();

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

module.exports = router;
