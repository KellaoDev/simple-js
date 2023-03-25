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

//Exercicio04
/*
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
*/

//Exercicio05
/*
const vetor = [8, 5, 2]
vetor.sort((a, b) => a - b)
console.log(vetor)
*/

//Exercicio06
/*
let mediaDisciplinas

let nome = String(prompt(`Informe o seu nome: `))
let portugues = (prompt(`Informe a sua nota na disciplina de português: `))
let matematica = (prompt(`Informe a sua nota na disciplina de matemática: `))
let conhecimentoGerais = (prompt(`Informe a sua nota na disciplina de conhecimentos gerais: `))

mediaDisciplinas = (parseFloat(portugues) + parseFloat(matematica) + parseFloat(conhecimentoGerais)) / 3
console.log(`${nome} a sua média geral é: ${mediaDisciplinas.toFixed(2)}`)


if (mediaDisciplinas > 7 && portugues > 5 && matematica > 5 && conhecimentoGerais > 5) {
    console.log(`${nome} você foi aprovado`)
} else {
    console.log(`${nome} você foi reprovado`)
}
*/

//Exercicio07
/*
let a = parseFloat(prompt(`Informe o valor de A: `))
let b = parseFloat(prompt(`Informe o valor de B: `))
let c = parseFloat(prompt(`Informe o valor de C:`))

let soma = a + b

if(soma < c) {
    console.log(`A soma de A com B é menor que C`)
} else if (soma > c) {
    console.log(`A soma de A com B é maior que C`)
} else {
    console.log(`A soma de A com B é igual à C`)
}
*/

//Exercicio08
/*
let contas = String(prompt(`Informe a sua conta: `))

let soma = 0

for(let i = 0; i < contas.toString().length; i++) {
    soma += parseInt(contas.toString()[i])
}

let digitoD = soma % 10

let contaCompleta = (`000000` + contas.toString()).slice(-6) + `-` + digitoD.toString();
console.log(contaCompleta)
*/

//Exercicio 09
/*
let grupo = parseInt(prompt(`Informe a quantidade de pessoas do grupo: `))
let idade
let sexo
let salario
let maiorIdade = Number(-Infinity)
let menorIdade = Number(+Infinity)
let qtdMulheres = 0

for (let i = 0; i < grupo; i++) {
    idade = parseInt(prompt(`Informe a idade do habitante(${i}): `))
    sexo = parseInt(prompt(`Informe o sexo do habitante(${i}): `))
    salario = parseFloat(prompt(`Informe o seu salário: `))

    if (menorIdade > idade) {
        menorIdade = idade
    }
    if (maiorIdade < idade) {
        maiorIdade = idade
    }

    if (sexo === `1` && salario < 100.00) {
        qtdMulheres++
    }
}

let media = salario / grupo
console.log(``)
console.log(`A média de salário do grupo é: ${media.toFixed(2)}`)
console.log(`A maior idade do grupo é: ${maiorIdade}`)
console.log(`A menor idade do grupo é: ${menorIdade}`)
console.log(`Quantidade de mulheres com salário até 100.00: ${qtdMulheres}`)
*/

//Exercicio 10
/*
const frase = String(prompt(`Informe uma frase: `))
let verificarFrase = 0

for(let i = 0; i < frase.length; i++) {
    if(frase[i] === `a` || frase[i] === `A`) {
        verificarFrase++
    }
}
*/

//Exercicio 11
/*
let string = String(prompt(`Informe uma string: `))
let posicao = string.indexOf(`j`)

if (string.includes(`j`)) {
    console.log(`A letra 'j' existe na posição ${posicao}`)
} else {
    console.log(`A letra 'j' não foi encontrada na string`)
}
*/

//By Kellao

