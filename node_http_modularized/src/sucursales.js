const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
let theatersJson = fs.readFileSync(path.join(__dirname, '..', '/data/theaters.json'), 'utf8');
let theaters = JSON.parse(theatersJson);
let arrayTheaters = theaters.theaters;

let sucursal = {
    titulo: "Nuestras Salas.\n",
    totalSalas: `${theaters.total_theaters.toString()} \n`,
    listadoSalas: arrayTheaters,
}

module.exports = sucursal;

console.log("Sucursales funciona");
