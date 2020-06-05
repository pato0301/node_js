const index = require('./src/index')

let router = {
    ruta: function(ruta,res){
        switch(ruta){
            case '/':
                res.write(index.home.titulo);
                res.write("\n");
                res.write("Total de peliculas: " + index.home.total_movies + "\n");
                res.write("\n");
                index.home.order_movies.forEach(element => res.write(`Pelicula: ${element} \n`))
                for (let i = 0; i < 5;i++){
                    res.write("\n");
                }
                res.write(index.home.pie_pagina);
                res.write(index.home.pie_pagina1);
                res.write(index.home.pie_pagina2);
                res.write(index.home.pie_pagina3);
                res.write(index.home.pie_pagina4);
                res.write(index.home.pie_pagina5);
                res.end("")
                break;
            case '/en-cartelera':
                res.write(index.cartelera.titulo);
                res.write(index.cartelera.total_peliculas);
                index.cartelera.listado_movies.forEach(function(element){
                    res.write("Pelicula: " + element.title +"\n");
                    res.write("Review: " + element.overview +"\n");
                    res.write("\n");
                })
                res.end("");
                break;
            case '/mas-votadas':
                res.write(index.votadas.titulo);
                res.write(index.votadas.total_movies);
                res.write(index.votadas.promedio);
                index.votadas.listado_movies.forEach(function(element){
                    res.write("Pelicula: " + element.title +"\n");
                    res.write("Rating: " + element.vote_average +"\n");
                    res.write("Reseña: " + element.overview +"\n");
                    res.write("\n");
                })
                res.end("")
                break;
            case '/sucursales':
                res.write(index.sucursales.titulo)
                res.write("\n");
                res.write("Cantidad de sucursales: " + index.sucursales.totalSalas)
                res.write("\n");
                index.sucursales.listadoSalas.forEach(element => {
                    res.write("Sala: " + element.name + "\n")
                    res.write("Dirección: " + element.address + "\n")
                    res.write("Descripción: " + element.description + "\n")
                    res.write("\n");
                })
                res.end("")
                break;
            case '/contacto':
                res.write(index.contactos.titulo);
                res.write("\n");
                res.write(index.contactos.contenido);
                res.end("");
                break;
            case '/preguntas-frecuentes':
                res.write(index.preguntas.titulo);
                res.write("\n");
                res.write("Cantidad de FAQS: " + index.preguntas.totalPreguntas + "\n");
                res.write("\n");
                index.preguntas.listado.forEach(element => 
                    {res.write("Pregunta: " + element.faq_title + "\n")
                    res.write("Respuesta: " + element.faq_answer + "\n")
                    res.write("\n")});
                res.end("");
                break;   
            default:
                res.end("Error 404\n");
                break;
        }
    }
};

module.exports = router;