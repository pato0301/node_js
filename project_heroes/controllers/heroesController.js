const fs = require('fs');
const path = require('path');
const heroesJSON = fs.readFileSync(path.resolve(__dirname,'../data/heroes.json'))
const heroesData = JSON.parse(heroesJSON)

let heroes = {
    index: function (req,res) {
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        heroesData.forEach(element => {
            res.write(`Id: ${element.id}\n`)
            res.write("\n")
            res.write(`Nombre: ${element.nombre}\n`)
            res.write("\n")
            res.write(`Profesion: ${element.profesion}\n`)
            res.write("\n")
            res.write(`Pais: ${element.pais}\n`)
            res.write("\n")
            res.write(`Reseña: ${element.resenia}\n`)
            res.write("\n")
        });
        res.end("");
    },
    detalle: function (req,res) {
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        let heroeFind = false;
        heroesData.forEach(element => {
            if(element.id == req.params.id){
                heroeFind = true
                res.write (`Hola, mi nombre es ${element.nombre} y soy ${element.profesion}\n`)
                res.write("\n")
            }
        });
        if(!heroeFind){
            res.write (`​"No encontramos un héroe con id ${req.params.id} para mostrarte su biografía"​.\n`)
            res.write("\n")
        }
        res.end("");
    },
    resenia: function (req,res) {
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        let heroeFind = false;
        if(req.params.ok === undefined){
            res.write("Lamento que no desees saber más de mi :(\n");
            res.write("\n");
            heroesData.forEach(element => {
                if(element.id == req.params.id){
                    heroeFind = true
                    res.write (`Hola, mi nombre es ${element.nombre} y soy ${element.profesion}\n`)
                    res.write("\n")
                }
            });
            if(!heroeFind){
                res.write (`​"No encontramos un héroe con id ${req.params.id} para mostrarte su biografía"​.\n`)
                res.write("\n")
            }
            res.end("");
        }
        else{
            heroesData.forEach(element => {
                if(element.id == req.params.id){
                    heroeFind = true
                    res.write (`Hola, mi nombre es ${element.nombre} y soy ${element.profesion}\n`)
                    res.write("\n")
                    res.write(`Mira mi reseña ;) :\n`)
                    res.write(`${element.resenia}\n`)
                    res.write("\n")
                }
            });
            if(!heroeFind){
                res.write (`​"No encontramos un héroe con id ${req.params.id} para mostrarte su biografía"​.\n`)
                res.write("\n")
            }
            res.end("");
        }
    },
};

module.exports = heroes;