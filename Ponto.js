`O . é um coringa, valido apenas para a posição, ou seja ele vai retornar 
qualquer coisa que esteja entre um e outro, como no exemplo abaixo:`

const num = '1,2,3,4,5,6,7,8,9,0'
console.log(num.match(/1.2/g))
console.log(num.match(/1..2/g))
console.log(num.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))

