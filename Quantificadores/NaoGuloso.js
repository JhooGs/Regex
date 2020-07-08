const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//Quantificadores são gulosos por padrão (greedy)

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

///Quantificadores NÃO gulosos

const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))



 



