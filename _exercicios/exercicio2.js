//Faça um Programa que converta metros para centímetros. (Dica:  1 metro = 100 centímetros)  (Bônus de um ponto para o sorteado  ou voluntário que resolver)

var evento = document.getElementById ('botao')

evento.addEventListener ('click', Converter)

function Converter () {
    var valor = document.getElementById ('valor')
    var msg = document.getElementById ('msg')
    var valorInformado = Number (valor.value) 
    var conversao = (valorInformado * 100)
    msg.innerHTML = (`${conversao}`)
}