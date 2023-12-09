// definindo valores 
const gasolina = 5;
const alcool = 3;
let gasosa = 0;
let alco = 0;

// CRIANDO INTERAÇÃO COM O USER
let opcao = parseInt(prompt("Escolha o que deseja fazer " + "\n1 = abastecer com gasolina  ; \n2 = abastecer com álcool;\n3 = calibrar o pneu;")) // o \n e para quebra de linhas dentro das opções para facilitar a exibição para o usuario.


// Criando o switch


switch(opcao){
    case 1: 
        gasosa = Number(prompt("Qual valor que deseja abastecer em gasolina ?"))
            console.log("Foi abastecido R$" + gasosa + " em gasolina isso da em litros "  + (gasosa / gasolina) + " Ltrs." );
        break;
    case 2: 
        alco = Number(prompt("Qual valor que deseja abastecer em álcool ?"))
            console.log("Foi abastecido R$" + alco + " em álcool isso da em litros "  + (alco / alcool) + " Ltrs." );
        break;
    case 3:
        console.log("Você calibrou o pneu !");
        break;
    default:
        console.log(" ### ERRO ###" + "\n SELECIONE UMA OPÇÃO VALIDA \n ATUALIZE A PAGINA")
    

}