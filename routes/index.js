var express = require('express');
var router = express.Router();
var db = require("../db.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(
    db
  ).status(200);
});
router.get('/pizzas', function(req, res, next) {
  res.json(
    db.pizzas
  ).status(200);
});

router.get('/toppings', function(req, res, next) {
  res.json(
    db.toppings
  ).status(200);
});

module.exports = router;
