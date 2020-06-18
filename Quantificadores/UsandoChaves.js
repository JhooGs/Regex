const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

//para definir um quantificador usando {} ou seja, a quantidade de caracteres que você deseja pegar 

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g)) // Ele vai pegar primeiro o que estiver com 1 e depois o que for número

console.log(texto.match(/\w{7}/g)) // o \w pega tudo o que for letras, exeto caracateres speciais ~,ç, etc

console.log(texto.match(/[\wõ]{7,}/g)) // Aqui ele inclui o õ 


