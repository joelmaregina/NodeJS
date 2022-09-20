let txt = "Programming courses always starts with a hello world example.";

let regex1 = new RegExp("hello");
let regex2 = /world/;
let regex3 = /World/;

// Busca a palavra/ fragmento/ padrão da palavra:
console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true
console.log(regex3.test(txt)); // false

console.log(regex1.exec(txt)); 
// Array (1): -> (1) = Número de matches da Regex no txt
// [
//     'hello',
//     index: 41,  -> Onde o match ocorre
//     input: 'Programming courses always starts with a hello world example.',
//     groups: undefined
// ]

console.log(txt.match(regex1));
// [
//     'hello',
//     index: 41,
//     input: 'Programming courses always starts with a hello world example.',
//     groups: undefined
// ]

console.log(txt.search(regex1)); // 41 -> O índice do inicio da palavra/expressão

console.log(txt.replace(regex1, 'hi')); // Programming courses always starts with a hi world example. Não altera a string original

console.log(txt.split(regex1));
// [ 'Programming courses always starts with a ', ' world example.' ]
// Retorna um array com o conteudo antes e após a expressão passada (Muito usado para separar palavras usando espaço) :

let regex4 = /\s/;
console.log(txt.split(regex4));
[ 'Programming', 'courses', 'always', 'starts', 'with', 'a', 'hello', 'world', 'example.' ]