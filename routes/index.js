var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.status(200);
  console.log(" (Der Server funktioniert)")
});

router.get('/api',function(req,res,next){
  res.json([{user:'fake', password:'fake'}])
});

module.exports = router;
