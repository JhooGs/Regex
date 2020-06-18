const texto1 = 'De longe eu vaistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There ius a big fog in NYC'

//* =>zero ou mais 


const regex = /fogo*/gi // O * simboliza que ele vai pegar se tiver 'o' ou não tiver ou ter muitos como no exemplo fogooo
//const regex = /fogo*?/gi Se voc utilizar o ? após, ele vai simbolizar que você quer pegar o menor número possível, que equivale apenas ao
                        // fogo e nao fogoooo, teste o exemplo

console.log(texto1.match(regex))
console.log(texto2.match(regex))