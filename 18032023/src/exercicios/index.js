const prompt = require(`prompt-sync`)()

//Exercicio 01
/*const nome = String(prompt(`Qual o seu nome? `))
const salarioBruto = parseFloat(prompt(`Informe o seu salário bruto:`))
const previdenciaSocial = salarioBruto * 0.1
const salarioPosProvidencia = salarioBruto - previdenciaSocial
const imposto = salarioPosProvidencia * 0.05
const salarioLiquido = salarioPosProvidencia - imposto

console.log(`O seu salário liquído é de:${salarioLiquido.toFixed(2)}`)
*/

//Exercicio02
/*
let tempo = parseFloat(prompt(`Informe o tempo gasto da viagem (horas): `))
let velocidade = parseFloat(prompt(`Informe a velocidade média da viagem (horas): `))
let distancia = tempo * velocidade
let litros_usados = distancia / 12

console.log(`Velocidade média: ${velocidade.toFixed(2)} Km/h`)
console.log(`Tempo gasto na viagem: ${tempo.toFixed(2)} horas`)
console.log(`Distância percorrida: ${distancia.toFixed(2)} quilômetros`)
console.log(`Quantidade de litros utilizada na viagem: ${litros_usados.toFixed(2)} Litros`)
*/

//Exercicio03
/*
const nome = String(prompt(`Informe o seu nome: `))
let codigoMatricula = String(prompt(`Informe o seu número de matrícula (AASDDD): `))

let ano = codigoMatricula.substring(0, 2)
let semestre = codigoMatricula.substring(2) == `1` ? `1ª` : `2ª`
let ordem = [`${codigoMatricula}, ${semestre}, ${ano}` ]
console.log(`O seu ano de matrícula é: ${ano}`)
console.log(`O seu semestre da matrícula é: ${semestre}`)
console.log(`${nome} a sua ordem de matricula é: ${ordem}`)
*/

let numero01 = parseFloat(prompt(`Informe o primeiro numero: `))
let numero02 = parseFloat(prompt(`Informe o segundo numero: `))
let numero03 = parseFloat(prompt(`Informe o terceiro numero: `))

if (numero01 + numero02 > numero03 && numero02 + numero03 > numero01 && numero03 + numero01 > numero02) {
    if (numero01 === numero02 && numero02 === numero03) {
        console.log(`O triângulo é equilátero`)
    } else if ((numero01 === numero02) || (numero01 === numero03) || (numero02 == numero03)) {
        console.log(`O triângulo é isóscele`)
    } else {
        console.log(`O triângulo escaleno`)
    } 
    } else {
    console.log(`Não é um triângulo`)
    }








