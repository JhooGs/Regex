const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe.
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gi)) // Essa expressão significa que o último caractere deve terminar com o mesmo que começou //sem multiline, \1 é retrovisor 
console.log(texto.match(/^(\w).+\1$/gim)) // A flag multiline significa que ele vai analizar cada linha de modo individual