var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[1]

corpo.style.background = 'black'
p1.style.color = 'blue'

// window.alert('Está escrito assim:' + p1.innerText)
window.document.write('Está escrito assim: ' + p1.innerHTML)

// var d = window.document.getElementById('msg')        
// d.style.background = 'green'
// d.innerText = 'Estou aguardando...' 

// var d = window.document.getElementsByClassName('msg')[0]
// d.style.background = 'green'
// d.innerText = 'Estou aguardando...'

var d = window.document.getElementsByName('msg')
d[0].style.background = 'green'
d[0].innerText = 'Estou aguardando...'

var e = window.document.querySelector('div#query')
e.style.background = 'red'
e.innerText = 'Estou aguardando também...'

// window.document.write('Olá, mundo!')
// window.document.write(window.document.URL)
