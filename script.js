function carregar() {

    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let rodape = document.getElementById('rodape');
    let data = new Date();
    hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;
    rodape.innerHTML = `${data.getFullYear()}`;

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'assets/manha.png';
        document.body.style.background = '#e2cd9f';

    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'assets/tarde.png';
        document.body.style.background = '#b9846f';
    } else {
        //BOA NOITE
        img.src = 'assets/noite.png';
        document.body.style.background = '#515154';
    }
}