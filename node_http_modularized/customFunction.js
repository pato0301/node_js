const sort = {
    alfabetic : function(objeto, sortBy){
        let nombre_peliculas = [];
        if (sortBy === "original_title"){
            objeto.forEach(function(element){
                nombre_peliculas.push(element.original_title)
            });
            nombre_peliculas = nombre_peliculas.sort();
            return nombre_peliculas
        }
    },
    totalMostRate : function(objeto){
        let promedio_peliculas = 0; 
        let most_voted = objeto.filter(element => element.vote_average >= 7);
        return most_voted;
    },
    promedioTop: function(objeto){
        let most_voted = this.totalMostRate(objeto);
        let promedio_peliculas = 0;
        most_voted.forEach(function(element){
            promedio_peliculas = promedio_peliculas + element.vote_average
        });
        promedio_peliculas = promedio_peliculas/most_voted.length
        return promedio_peliculas;
    },
}

module.exports = sort;