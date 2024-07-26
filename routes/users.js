var express = require('express');
var router = express.Router();
var clothModel = require('../Models/Clothmodel');
const Clothmodel = require('../Models/Clothmodel');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let cloths = await Clothmodel.find({})
    console.log(cloths,"user end")
    res.render('user/Home', { title: 'Express' ,cloths});
  } catch (error) {
    
  }
  });

module.exports = router;
