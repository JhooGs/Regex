const texto = 'Bom\ndia'
console.log(texto.match(/./gi))
console.log(texto.match(/..../gi)) // O PONTO NÃO ENGLOBA O \n

//dotall - algumas linguagens tem uma flag /exp/s, mas JS não!