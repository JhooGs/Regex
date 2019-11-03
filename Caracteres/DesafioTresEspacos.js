const texto = 'a   b'

console.log(texto.match(/a...b/g))
console.log(texto.match(/a   b/g))
console.log(texto.match(/a\s+b/g))
console.log(texto.match(/a {3}b/g))