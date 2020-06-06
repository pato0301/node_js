let index = {
    home: function (req,res) {
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.write("​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio.\nEsperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.\n");
        for(let i = 0; i < 5; i++){
            res.write("\n")
        };
        res.write("Web Page Map:\n");
        res.write("\n")
        res.write("/heroes -> List of Heroes\n");
        res.write("/heroes/detalle/id -> Info about certain Heroe\n");
        res.write("/heroes/bio/id/ok -> Info and review of specific Heroe\n")
        res.write("/creditos -> Learn about the developer of this project\n")
        res.end("\n")
    },
    creditos: function (req,res) {
        res.send("​This project was developed by Patricio");
    },
};

module.exports = index;