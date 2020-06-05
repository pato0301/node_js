const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
let moviesJson = fs.readFileSync(path.join(__dirname, '..', '/data/movies.json'), 'utf8');
let movies = JSON.parse(moviesJson);
let arrayMovies = movies.movies

let enCartelera = {
    titulo: "En Cartelera\n",
    total_peliculas: movies.total_movies.toString(),
    listado_movies: arrayMovies,
}

module.exports = enCartelera;

console.log("En cartelera funciona");
