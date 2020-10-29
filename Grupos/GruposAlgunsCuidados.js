const texto = 'Pedrinho (filho do Pedro Silva) é doutor ABC!'


console.log(texto.match(/[(abc)]/gi)) // não é um grupo

console.log(texto.match(/[abc]/gi))

console.log(texto.match(/(abc)/gi))