function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas `
    if (hora > 1 && hora <= 5) {
        imagem.src = 'Imagens/madrugada_round_pp.jpg' /*Bom dia!*/
        document.body.style.background = '#6f4c6d'
        mensagem.innerHTML += 'da madrugada.'
    }
    else if (hora > 5 && hora <= 12) {
        imagem.src = 'Imagens/morning_round_pp.jpg'
        document.body.style.background = '#e2c99f'
        mensagem.innerHTML += 'da manhã.'
    }
    else if (hora == 1) {
        mensagem.innerHTML = 'Agora é 1 hora da madrugada.'
        imagem.src = 'Imagens/madrugada_round_pp.jpg'
        document.body.style.background = '#6f4c6d'
    }
    else if (hora >= 12 && hora <= 18) {
        imagem.src = 'Imagens/afternoon_round_pp.jpg' /*Boa Tarde!*/
        document.body.style.background = '#ea761c'
        mensagem.innerHTML += 'da tarde.'
    }
    else {
        imagem.src = 'Imagens/night_round_pp.jpg' /*Boa Noite!*/
        document.body.style.background = '#6f4c6d'
        mensagem.innerHTML += 'da noite.'
    }
}
