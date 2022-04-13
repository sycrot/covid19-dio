let participantes = 5
let criancas
let array = []


array.push('Milena F')
array.push('Joao M')
array.push('Rafaela F')
array.push('Renata F')
array.push('Felipe M')

const meninos = array.filter(e => e.valueOf() == 'M')
console.log(meninos)
const meninas = array.filter(e => e == 'F').length

console.log(`${meninos} carrinhos\n${meninas} bonecas`)