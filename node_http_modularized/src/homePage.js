const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
let moviesJson = fs.readFileSync(path.join(__dirname, '..', '/data/movies.json'), 'utf8');
let movies = JSON.parse(moviesJson);
let order_movies = alfabet.alfabetic(movies.movies,"original_title");

let homePage = {
    titulo: "​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores\npelículas, incluso mucho mejor que Netflix, Cuevana y PopCorn​. \n",
    total_movies: movies.total_movies.toString(),
    order_movies: order_movies,
    pie_pagina: "Recorda que podes visitar las secciones\n",
    pie_pagina1: "i. En Cartelera\n",
    pie_pagina2: "ii. Mas Votadas\n",
    pie_pagina3: "iii. Sucursales\n",
    pie_pagina4: "iv. Contacto\n",
    pie_pagina5: "v. Preguntas Frecuentes\n",
}

module.exports = homePage;

console.log("home page funciona");
