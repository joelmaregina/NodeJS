const name = 'Joelma';
const surname = 'Assis';

const speakName = () => name + ' ' + surname;

// module.exports.name = name;
// module.exports.surname = surname;
// module.exports.speakName = speakName;

// "Exports" -> Link para o "module.exports"

exports.name = name;
exports.surname = surname;
exports.speakName = speakName;
this.qualquerCoisa = 'O que eu quiser exportar' //This aponta (por referência) ao 'module.exports' e 'exports', então, essa info será exportada também

console.log(module.exports);
