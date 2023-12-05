// Declaração de variavel

let nome = ""
let idade = 0
let altura = 0
let peso = 0

// Solicitando informação ao usuario  e atribuindo valores  as variaveis

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
altura = parseFloat(prompt("Digite sua altura"))
peso = parseInt(prompt("Digite seu peso"))


//calculando o ano que a pessoa nasceu e o imc

let anoNasc = 0 
anoNasc= 2023 - idade

let imc = 0
imc = peso/ (altura*altura)


//exibir info no console

console.log("Olá" + nome + ",voce tem" + idade + "anos,nasceu em" + anoNasc + ",tem" + altura + "de altura, pesa" + peso + "KG, e seu IMC é " + imc + "kg/m2" )



// Observação exercicio já corrigido