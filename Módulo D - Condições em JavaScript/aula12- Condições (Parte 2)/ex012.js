var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()

console.log(`Agora são exatamente ${hora}:${minuto}:${segundo} do dia ${dia}/${mes}/${ano}`)

if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora <= 18) {
    console.log('Boa tarde!')
}
else if (hora <= 24){
    console.log('Boa noite!')
}
else {
    console.log('Boa madrugada!')
}