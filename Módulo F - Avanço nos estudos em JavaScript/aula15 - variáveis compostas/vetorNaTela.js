let num = [8, 1, 7, 4, 2, 9]

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

num.sort()
console.log('Ordenando...')
for (let pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}