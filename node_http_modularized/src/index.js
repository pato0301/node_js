const contacto = require('./contacto');
const enCartelera = require('./enCartelera');
const homePage = require('./homePage');
const masVotadas = require('./masVotadas');
const preguntasFreq = require('./preguntasFecuentes');
const sucursal = require('./sucursales');

let index = {
    contactos: contacto,
    cartelera: enCartelera,
    home: homePage,
    votadas: masVotadas,
    preguntas: preguntasFreq,
    sucursales: sucursal,
}

module.exports = index;
