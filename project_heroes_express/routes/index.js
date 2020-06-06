var express = require('express');
var router = express.Router();
const path = require('path');
const indexController = require(path.resolve(__dirname,'../controllers/indexController'));

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/",indexController.home)

router.get("/creditos",indexController.creditos)

module.exports = router;
