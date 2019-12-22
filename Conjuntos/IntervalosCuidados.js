const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não define um range
console.log(texto.match(/[A-z]/g))// O intevalo usama ordem de tabela ASCII

// tem que respeitar a ordem da tabela ascii
//console.log(texto.match(/[a-Z]/g))
//console.log(texto.match(/[4-1]/g))
