function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerText = `Idade calculada ${idade}`
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('class', 'foto-redonda')
        
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './img/M-baby.jpg')
            }
            else if (idade < 22) {
                // Jovem
                img.setAttribute('src', './img/M-young.jpg')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/M-adult.jpg')
            }
            else {
                // Idoso
                img.setAttribute('src', './img/M-old.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './img/F-baby.jpg')
            }
            else if (idade < 22) {
                // Jovem
                img.setAttribute('src', './img/F-young.png')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/F-adult.jpg')
            }
            else {
                // Idoso
                img.setAttribute('src', './img/F-old.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}