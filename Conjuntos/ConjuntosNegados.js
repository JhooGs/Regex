
// O ^ fora dentro conjunto simboliza negação

const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))  
console.log(texto.match(/[^\d]/g))
console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2::;<=>? @'

console.log(texto2.match(/[^!-/:-@\s]/g)) // notar que o - nesse caso simboliza um conjunto de caracteres especiais