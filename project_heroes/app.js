const express = require('express');
const app = express();
const index = require('./routes/index')
const heroes = require('./routes/heroes')

// Home Page
app.use("/",index)

app.use("/heroes",heroes)

app.listen(3000,function () {
    console.log("Servidor funcionando en el puerto 3000");
})