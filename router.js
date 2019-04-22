const express = require('express');
var router = express.Router();
var path = require('path');

// route to handle entry point
router.get('/', function(req, res){
  res.render('pages/index',{Users: "hi"});
});
// route to handle Registration form
router.get('/services', function(req, res){
  res.render('pages/services');
});
// route to handle login form
router.get('/contacts', function(req, res){
  res.render('pages/contacts');
});



module.exports = router;
