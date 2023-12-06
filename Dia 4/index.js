// == igual | != diferente | < menor que e > maior que | <=  >= maior e menor ou igual 

// === é igual o valor e o tipo | !== é diferente o valor e o tipo

let idade = Number(prompt('Insira sua idade :'))

if(idade <= 10){
    console.log(idade)
    let  dentroDoEscopo = 'Davi'
    console.log(dentroDoEscopo)
    console.log('Você tem menos ou tem 10 anos')
    if(true){
        console.log('Estou no terceiro escopo')
        console.log(dentroDoEscopo)
    }
}

else{
    console.log('Você tem mais que 10 anos')
}

console.log("SAI DO ESCOPO DO IF")

console.log(dentroDoEscopo)