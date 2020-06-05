const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
//const movies = require('../data/movies.json')
let theatersJson = fs.readFileSync(path.join(__dirname, '..', '/data/theaters.json'), 'utf8');
let theaters = JSON.parse(theatersJson);
let arrayTheaters = theaters.theaters;

let sucursal = {
    titulo: "Nuestras Salas.\n",
    totalSalas: `${theaters.total_theaters.toString()} \n`,
    listadoSalas: arrayTheaters,
//     theaters.forEach(function(element){
//         res.write("Nombre Sala: " + element.name +"\n");
//         res.write("Direccion: " + element.address +"\n");
//         res.write("Descripcion: " + element.description +"\n");
//         res.write("\n");
//     }),
// }
}

module.exports = sucursal;

console.log("Sucursales funciona");
