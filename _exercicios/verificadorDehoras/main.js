function carregar() {
    var mgs = window.document.getElementById ('msg');
    var img = window.document.getElementById ('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes()
    var seconds = data.getSeconds()
    mgs.innerHTML = (`Agora são: ${hora} : ${min}: ${seconds}`);

    if (hora >= 0 && hora < 12) {
        //BOnjour
        img.src = './assets/images/manha.png'    
    }
    else if (hora >= 12 && hora < 18) {
        //bom Tarde
        img.src = './assets/images/tarde.png'
        //document.body.style.background = 'red'
        document.getElementById('principal').style.background = 'grey'

    }
    else{
        // bomNoitê

        img.src = './assets/images/noite.png'

    }
}



