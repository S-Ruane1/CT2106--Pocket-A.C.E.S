var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('index');
});

//Socs page
router.get('/socs', function(req, res, next) {
  res.render('Socs' );
});

module.exports = router;
