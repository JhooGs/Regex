const texto = `Os emails convidados são:
                fulano@cod3f.com.br
                jonathan@logcomex.com
                dfdff@dfdfdf
                teste_ste@dfjdj.br`

console.log(texto.match(/[^\s].+@{1}.+\..+/g))