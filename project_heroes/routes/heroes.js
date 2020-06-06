const express = require('express');
const router = express.Router();
const path = require('path');
const heroesController = require(path.resolve(__dirname,'../controllers/heroesController'));

router.get("/",heroesController.index);

router.get("/detalle/:id",heroesController.detalle);

router.get("/bio/:id/:ok?",heroesController.resenia);

module.exports = router;