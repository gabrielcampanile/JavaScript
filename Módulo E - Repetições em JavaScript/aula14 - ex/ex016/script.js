function contar() {
    let i = document.getElementById('inicio')
    let f = document.getElementById('fim')
    let p = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        // alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }
    else {
        res.innerHTML = `Contando: <br>`
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)
        if (p == 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f ) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }

    /*
    var res = document.querySelector('div#res')
    i = Number(i.value)
    f = Number(f.value)
    p = Number(p.value)
    var c

    res.innerHTML = `<p>Contando:</p>`
    for (c = i; c <= f; c += p) {
        res.innerHTML += `${c} `
    }
    */
}