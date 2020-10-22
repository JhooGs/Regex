const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))  //O escape (\) \1 significa que ele vai pegar o conteúdo do grupo 1, conteúdo é tudo guardado dentro dos ()

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2/gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // Quando colocado ?: ele ignora e não guardo conteúdo do grupo, ou seja ele pula esse grupo

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi)) // o ultimo grupo se tornou opcional

console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // ele vai trocar a palavra lenta para o conteúdo do segundo grupo ($2), no caso "mente"


