let num = document.querySelector('input#txtnum')
let sel = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let lista = []

function adicionar() {
    res.innerHTML = ''

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        if (n < 1 || n > 100) {
            window.alert('Por favor, digite um número válido!');
        } else if (lista.indexOf(n) === -1) { // Verifica se o número já está na lista
            // window.alert(`${n} adicionado ao array`);
            let item = document.createElement('option');
            item.text = `Valor ${n} adicionado`;
            sel.appendChild(item);
            lista.push(n);
        } else {
            window.alert('Número já adicionado!');
        }
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    // window.alert(`alo ${lista}`)
    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }
    else {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max(...lista)}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min(...lista)}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma(lista)}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média(lista)}</p>`
    }
}

function soma(n) {
    let s = 0, c

    for (c = 0; c < n.length; c++) {
        s += n[c]
    }

    return s
}

function média(n) {
    return soma(n) / n.length 
}