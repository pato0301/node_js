const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
//const movies = require('../data/movies.json')
let faqsJson = fs.readFileSync(path.join(__dirname, '..', '/data/faqs.json'), 'utf8');
let faqs = JSON.parse(faqsJson);
let arrayFaqs = faqs.faqs;

let questions = {
    titulo: "Preguntas Frecuentes.\n",
    totalPreguntas: faqs.total_faqs.toString(),
    listado: arrayFaqs
    // arrayFaqs.forEach(element => {res.write("Pregunta: " + element.faq_title + "\n")
	// 		res.write("Respuesta: " + element.faq_answer + "\n")
	// 		res.write("\n")}),
};

module.exports = questions;
console.log("FAQS funciona");
