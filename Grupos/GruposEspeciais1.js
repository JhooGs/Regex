const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi)) // À-ú range unicode para pegar todas as palavras com acentos no texto

// Positive Looahead

console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) // ele está pegando o valor que está na frente do grupo criado (?=,), que no caso é a palavra 'calmo'

console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))

console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead

const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+(?!,)/gi)) // Igual anterior mas é negação, ou seja ele não pega o que estiver na frente do grupo