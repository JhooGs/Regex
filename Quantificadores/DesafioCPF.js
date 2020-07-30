const texto = `CPF DOS APROVADOS: 
                - 600.567.890-12
                - 084.181.299-30
                - 212.1155.888.54
                - 212,588,777,58`

console.log(texto.match(/(\d{3}[\.|-]){3}\d{2}/g))