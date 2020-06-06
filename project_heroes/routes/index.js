const express = require('express');
const router = express.Router();
const path = require('path');
const indexController = require(path.resolve(__dirname,'../controllers/indexController'));

router.get("/",indexController.home)

router.get("/creditos",indexController.creditos)

module.exports = router;