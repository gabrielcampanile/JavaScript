var n1 = window.prompt('Digite um número inteiro: ')
var n2 = window.prompt('Digite um número real: ')
// var s = n1 + n1 concatenação
var s = Number(n1) + Number(n2) // pois window.prompt() retorna uma string 
window.alert('A soma vale ' + s)

var n3 = Number(window.prompt('Digite um número inteiro: '))
window.alert('O número inteiro foi ' + String(n3))
n3.toString() // converte para string

var nome = window.prompt('Qual é o seu nome?')
var idade = Number(window.prompt('Quantos anos você tem?'))
var nota = Number(window.prompt('Qual foi a sua nota?'))
var f = window.confirm('Você foi aprovado?')
window.alert(`Nome: ${nome}\nIdade: ${idade}\nNota: ${nota}\nAprovado: ${f}`)