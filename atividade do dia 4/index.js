// Jantar Especial

// Criando variaveis 

let fome = prompt("Você esta com Fome ? (apenas Sim ou Não)")
let dinheiro = prompt("Você tem dinheiro? (apenas Sim ou Não)")
let restaurante = prompt("O restaurante esta aberto? (apenas Sim ou Não)")


if(fome === "Não" || dinheiro === "Não" ){
    console.log('Hoje a janta será em casa')
}else if (dinheiro === "Sim" && restaurante === "Sim" ) {
    console.log('Hoje o jantar sera no seu restaurante preferido')
}else{
    console.log("Peça um deliver")
}