
var nome = window.prompt('Qual é o seu nome?') 
document.writeln(`<h2>Seu nome tem ${nome.length}</h2>`)
document.writeln(`<p>Seu nome em maiúsculas é ${nome.toUpperCase()}</p>`)


var n1 = 1543.2
window.alert(n1.toFixed(2)) // arredonda para 2 casas decimais
window.alert(n1.toFixed(2).replace('.', ',')) // troca o ponto por vírgula
window.alert(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // formata para o padrão brasileiro
window.alert(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))
window.alert(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}))
