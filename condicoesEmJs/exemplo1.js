var evento = document.getElementById ("verificar")

evento.addEventListener ('click', calcular)

function calcular(){
    var vel = document.querySelector('input#velocidade')
    var result = document.querySelector('div#resultado')
    var velocidadeIformada = Number(vel.value)
    result.innerHTML = (`Sua Velocidade é ${velocidadeIformada} Km/h </br> `) 
    if (velocidadeIformada > 60) {
        result.innerHTML += (' Você ultrapassou a velocidade permitida!')
    } else{
        result.innerHTML += ('Você está na velocidade da faixa permitida')
    }
}