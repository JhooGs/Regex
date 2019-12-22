const texto = '.$+*-'

console.log(texto.match(/[+.]./g)) // Não precisa de scape dentro de um conjunto, mas não todos
console.log(texto.match(/[$-?]/g)) // O - não deixa de ser meta caractere, ainda é considerado como intervalo
console.log(texto.match(/[+.]/g))


//NÃO é um intervalo

console.log(texto.match(/[$\-+?]/g))
console.log(texto.match(/[-?]/g))

// Pode precisar de scape dentro do conjunto: - [ ] ^