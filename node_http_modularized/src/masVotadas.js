const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
//const movies = require('../data/movies.json')
let moviesJson = fs.readFileSync(path.join(__dirname, '..', '/data/movies.json'), 'utf8');
let movies = JSON.parse(moviesJson);
let arrayMovies = movies.movies;
let arrayMostRated = alfabet.totalMostRate(arrayMovies);

let masVotadas = {
    titulo: "Más Votadas",
    total_movies: arrayMostRated,
    promedio: alfabet.promedioTop(arrayMovies),
    listado: arrayMostRated,
    // arrayMostRated.forEach(function(element){
    //     res.write("Pelicula: " + element.title +"\n");
    //     res.write("Rating: " + element.vote_average +"\n");
    //     res.write("Reseña: " + element.overview +"\n");
    //     res.write("\n");
    // }),
}

module.exports = masVotadas;

console.log("Más votadas funciona");
