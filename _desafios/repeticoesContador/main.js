
var evento = document.getElementById('btnContar')

evento.addEventListener('click', Contar)

function Contar() {
    var begin = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var result = document.getElementById('resultado')

    if (begin.value.length == 0 || end.value.length == 0 || passo.value.length == 0) {
        alert('{ERRO}! faltam dados')
    }

    else {
        result.innerHTML = 'Contando: '
        var cont = Number(begin.value)
        var end = Number(end.value)
        var passo = Number(passo.value)
    }
    if (passo <= 0 || passo > cont ) {
        alert ('Passo inválido! Passo 1 considerado')
        passo=1
    }
    if (cont < end ) {
        //crescente
        for (; cont <= end; cont += passo) {
            // console.log(cont)
            result.innerHTML += (`${cont} `)

        }
    }
    else {
        //crescente
        for (; cont >= end; cont -= passo) {
            // console.log(cont)
            result.innerHTML += (`${cont} `)

        }


    }

}
