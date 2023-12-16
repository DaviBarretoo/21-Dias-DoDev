let tabuada = Number(prompt('Escolha a tabuada que deseja '));

console.log(tabuada + "x 1 =" + tabuada * 1);
console.log(tabuada + "x 2 =" + tabuada * 2);
console.log(tabuada + "x 3 =" + tabuada * 3);
console.log(tabuada + "x 4 =" + tabuada * 4);
console.log(tabuada + "x 5 =" + tabuada * 5);


// MANEIRA DE FAAZER USANDO FOR (REPETIÇÃO)

for(let contador = 0; contador <= 100; contador++){
    console.log(tabuada + " x " + contador + " = " + tabuada * contador);
}