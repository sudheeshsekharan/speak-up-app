var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile('nocaptchaotp.html', {root: path.join(__dirname,'../',  'public') });
});

module.exports = router;
