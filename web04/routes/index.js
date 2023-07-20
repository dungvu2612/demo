var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var country = "VietNam";
  var year = 2023;
  var grade = 7.5;
  var pass = true;
  var gender = 'm';
  var sports = ["football", "badminton", "swimming", "voleyball"]

  res.render('index', 
  {country: country,
  year : year,
grade : grade,
pass : pass,
gender : gender,
sports: sports,}  )
});

module.exports = router;
