var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource yo!');
});

router.get('/cool',function(req,res,next){
  res.send('you are so cool yo!')
})

module.exports = router;
