var p = document.getElementById('país')
var res = document.getElementById('res')

function verificar() {
    if (p.value === 'Brasil') {
        res.innerHTML = '<p>Você é brasileiro!</p>'
    }
    else {
        res.innerHTML = '<p>Você é estrangeiro!</p>'
    }
}