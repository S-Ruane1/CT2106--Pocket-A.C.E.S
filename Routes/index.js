var express = require('Welcome to the NUIG Schedule App');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ehome', { title: 'Welcome to the NUIG Schedule App' });
});

//Socs page
router.get('/socs', function(req, res, next) {
  res.render('socs', { title: 'Socs' });
});

//Clubs page
router.get('/clubs', function(req, res, next) {
  res.render('clubs', { title: 'clubs' });
});

//Table Search page
router.get('/tablesearch', function(req, res, next) {
  res.render('tablesearch', { title: 'tablesearch' });
});

router.get('/ihome', function(req, res, next) {
  res.render('ihome', { title: 'ihome' });
});

router.get('/ehome', function(req, res, next) {
  res.render('ehome', { title: 'Welcome to the NUIG Schedule App' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/1BCT', function(req, res, next) {
  res.render('1BCT', { title: '1BCT' });
});

router.get('/2BCT', function(req, res, next) {
  res.render('2BCT', { title: '2BCT' });
});

router.get('/4BCT', function(req, res, next) {
  res.render('4BCT', { title: '4BCT' });
});

router.get('/1BE', function(req, res, next) {
  res.render('1BE', { title: '1BE' });
});

router.get('/2BE', function(req, res, next) {
  res.render('2BE', { title: '2BE' });
});

router.get('/4BE', function(req, res, next) {
  res.render('4BE', { title: '4BE' });
});

router.get('/1BG', function(req, res, next) {
  res.render('1BG', { title: '1BG' });
});

router.get('/2BG', function(req, res, next) {
  res.render('2BG', { title: '2BG' });
});

router.get('/4BG', function(req, res, next) {
  res.render('4BG', { title: '4BG' });
});

router.get('/1BM', function(req, res, next) {
  res.render('1BM', { title: '1BM' });
});

router.get('/2BM', function(req, res, next) {
  res.render('2BM', { title: '2BM' });
});

router.get('/4BM', function(req, res, next) {
  res.render('4BM', { title: '4BM' });
});

router.get('/1BSE', function(req, res, next) {
  res.render('1BSE', { title: '1SE' });
});

router.get('/2BSE', function(req, res, next) {
  res.render('2BSE', { title: '2BSE' });
});

router.get('/4BSE', function(req, res, next) {
  res.render('4BSE', { title: '4BSE' });
});
    
router.get('/1ECE', function(req, res, next) {
  res.render('1ECE', { title: '1ECE' });
});

router.get('/2ECE', function(req, res, next) {
  res.render('2ECE', { title: '2ECE' });
});

router.get('/4ECE', function(req, res, next) {
  res.render('4ECE', { title: '4ECE' });
});
    
router.get('/anime', function(req, res, next) {
  res.render('anime', { title: 'anime' });
});

router.get('/kayaking', function(req, res, next) {
  res.render('kayaking', { title: 'kayaking' });
});

router.get('/rowing', function(req, res, next) {
  res.render('rowing', { title: 'rowing' });
});

router.get('/anime', function(req, res, next) {
  res.render('anime', { title: 'anime' });
});

router.get('/archery', function(req, res, next) {
  res.render('archery', { title: 'archery' });
});

router.get('/rugby', function(req, res, next) {
  res.render('rugby', { title: 'rugby' });
});

router.get('/basketball', function(req, res, next) {
  res.render('basketball', { title: 'basketball' });
});

router.get('/BuildNewTimetable', function(req, res, next) {
  res.render('BuildNewTimetable', { title: 'BuildNewTimetable' });
});

router.get('/AlertLinkTest', function(req, res, next) {
  res.render('AlertLinkTest', { title: 'AlertLinkTest' });
});

router.get('/baking', function(req, res, next) {
  res.render('baking', { title: 'baking' });
});

module.exports = router;