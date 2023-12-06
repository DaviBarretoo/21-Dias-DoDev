// == igual | != diferente | < menor que e > maior que | <=  >= maior e menor ou igual 

// === é igual o valor e o tipo | !== é diferente o valor e o tipo


let idade = Number(prompt('Insira sua idade :'))
let nome = prompt('Insira seu nome ?')

if (idade === 22 && nome === "Davi"){
    console.log("Seu nome é Davi e você tem 22 anos");
}else if(idade === 22 || nome === 'Davi'){ //else if e se uma nova condição for verdadeira ou seja so vai ser executado se a primeira não for
    console.log("Você tem 22 anos OU  seu nome é Davi");
    // esse else de baixo so ta interligado a esse if por isso esta na mesma linha 
}else{
console.log('Seu nome não é Davi e você não tem 22 anos')
}