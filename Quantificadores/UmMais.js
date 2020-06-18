const texto1 = 'De longe eu vaistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There ius a big fog in NYC'

//+ => Representa 1 ou mais 

const regex = /fogo+/gi // O + representa umma ou mais ocorrências

console.log(texto1.match(regex))
console.log(texto2.match(regex))


const texto3 = 'Os números 0123456789.'

console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g)) // Pegar o conjunto de números que estão em sequência
