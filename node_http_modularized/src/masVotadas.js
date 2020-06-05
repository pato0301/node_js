const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
let moviesJson = fs.readFileSync(path.join(__dirname, '..', '/data/movies.json'), 'utf8');
let movies = JSON.parse(moviesJson);
let arrayMovies = movies.movies;
let arrayMostRated = alfabet.totalMostRate(arrayMovies);

let masVotadas = {
    titulo: "Más Votadas",
    total_movies: arrayMostRated,
    promedio: alfabet.promedioTop(arrayMovies),
    listado: arrayMostRated,
}

module.exports = masVotadas;

console.log("Más votadas funciona");
