const texto1 = 'De longe eu vaistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There ius a big fog in NYC'

//? => ZERO OU UM (opcional)


const regex = /fogo?/gi // A ultima letra junto com o ? se tornou um caractere opcional

console.log(texto1.match(regex))
console.log(texto2.match(regex))