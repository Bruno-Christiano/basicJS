function carregar() {
    var mgs = window.document.getElementById ('msg');
    var img = window.document.getElementById ('imagem');
    var sauda = window.document.getElementById ('saudacao');
    var mgs2 = window.document.getElementById ('msg2')
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes()
    var seconds = data.getSeconds()
    var dia = data.getDate()
    mgs.innerHTML = (`Agora são: ${hora} : ${min}: ${seconds} Do dia ${dia}`);
 // A cada mudança de horario dos dias as imagem irão mudando.
    if (hora >= 0 && hora < 12) {
        //BOnjour
        img.src = './assets/images/manha.png'    
        document.getElementById('principal').style.background = 'grey'
        sauda.innerHTML = ('Bonjour')
    }
    else if (hora >= 12 && hora < 18) {
        //bom Tarde
        img.src = './assets/images/tarde.png'
        //document.body.style.background = 'red'
        document.getElementById('principal').style.background = 'grey'
        sauda.innerHTML = ('Boa Tarde')

    }
    else{
        // bomNoitê

        img.src = './assets/images/noite.png'
        sauda.innerHTML = ('Boa Noite!')

    }
}



