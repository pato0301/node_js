const fs = require('fs');
let path = require("path");
const alfabet = require('../customFunction');
let faqsJson = fs.readFileSync(path.join(__dirname, '..', '/data/faqs.json'), 'utf8');
let faqs = JSON.parse(faqsJson);
let arrayFaqs = faqs.faqs;

let questions = {
    titulo: "Preguntas Frecuentes.\n",
    totalPreguntas: faqs.total_faqs.toString(),
    listado: arrayFaqs
};

module.exports = questions;
console.log("FAQS funciona");
