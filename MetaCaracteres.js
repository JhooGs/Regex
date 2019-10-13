// . ? * + - ^ $ | [ ] { } ( ) \  : 
// A barra invertida é um scape, quando você precisa usar um metha caracter no literal
// como por exemplo encontrar um ' . ' na string abaixo: 


const texto = '1,2,3,4,5,6,a.b c!d7e'
const regexPonto = /\./g
console.log(texto.match(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
