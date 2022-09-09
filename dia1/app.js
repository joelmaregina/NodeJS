// const mod = require('./mod');

// const speakName = require('./mod').speakName;
// //or
// const speakName2 = mod.speakName;

// console.log(mod.speakName());

// console.log(speakName2());

//**************************************************
// const { name, surname, speakName }  = require('./mod');
// console.log(name, surname);
// console.log(speakName());

// const path = require('path'); // Não precisa do caminho da pasta pois o Node já tras o path
// const axios = require('axios'); // Ap's onstalar o pacote axios (está presente na pasta node_modules);

// const { Person } = require('./mod2');
// const p1 = new Person('Joelma');
// console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch((e) => console.log(e));

//********************** AULA 2 ****************************
const multiplicacao = require('./B/C/D/mod3');

console.log(multiplicacao(3, 3)); // 9

console.log(__filename); // /Users/joelmaregina/Documents/Cursos-IBM/nodeJS/dia1/app.js
console.log(__dirname); // /Users/joelmaregina/Documents/Cursos-IBM/nodeJS/dia1