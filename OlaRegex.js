// OLA MUN.. OPS REGEX

const texto = "Casa bonita é uma casa amarela da esquina com a Rua ACASALAR."

const regex = /casa/gi
console.log(texto.match(regex))

console.log(texto.match(/a b/g))