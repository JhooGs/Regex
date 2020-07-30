const texto = `Lista de telefones: 
                - (11) 98756-1212
                - 99640-0257
                - 212.148.`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g)) // Cada '?' simboliza que o caractere anterior é opcional
                                                          // A expressão {X,Y}  simboliza que aquele conjunto deve ter X ate Y de numeros de caracateres
                                                          // no exemplo da aula, um telefone pode começar com 4 ou 5 numeros, então fica \d{4,5}