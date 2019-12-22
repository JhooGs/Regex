const texto = `1,2,3,4,5,6.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) // \d pega todos os digitos 
console.log(texto.match(/\D/g)) // \D não numeros [^0-9]

console.log(texto.match(/\w/g)) // [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaços [ \t\n\r\f]
console.log(texto.match(/\S/g)) // não espaços