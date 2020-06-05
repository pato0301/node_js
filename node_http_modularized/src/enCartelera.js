const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
//require(path.join(__dirname, '..', 'customFunction'));
let moviesJson = fs.readFileSync(path.join(__dirname, '..', '/data/movies.json'), 'utf8');
// let moviesJson = fs.readFileSync(__dirname + '/../../movies.json', 'utf8');
let movies = JSON.parse(moviesJson);
let arrayMovies = movies.movies

let enCartelera = {
    titulo: "En Cartelera\n",
    total_peliculas: movies.total_movies.toString(),
    listado_movies: arrayMovies,
    // arrayMovies.forEach(function(element){
    //     res.write("Pelicula: " + element.title +"\n");
    //     res.write("Review: " + element.overview +"\n");
    //     res.write("\n");
    // }),
}

//exports.enCartelera = enCartelera
module.exports = enCartelera;// , movies, arrayMovies, moviesJson;

console.log("En cartelera funciona");
