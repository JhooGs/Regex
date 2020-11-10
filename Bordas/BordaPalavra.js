const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi)) //Seleciona palavras que começam com dia 
console.log(texto1.match(/\w+dia\b/gi)) //Seleciona palavras que terminam com dia 
console.log(texto1.match(/\w*dia\w*/gi)) // todas as palavras que tem dia no meio


console.log(texto1.match(/\bdia\b/gi)) //tem bordas dos dois lados, ou seja somente a palavra Dia


//borda é não \w (\w negado), que é [^A-Za-z0-9_] ... temos problemas com acentos

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(texto2.match(/\bdia\b/gi)) // Ele considera as palavras com acento e espaço como bordas

console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // A vírgula entra! \S é não espaço (espaço negado), ou seja ignora ele

console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) // Aqui criamos dois grupos opcionais, com conjuntos de acentos que tenham dia no meio e ignorando a vírgula

