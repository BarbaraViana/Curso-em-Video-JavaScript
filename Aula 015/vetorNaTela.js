/* Para mostrar cada vetor na tela separado.
O que está entre chaves siginica a posição de cada vetor

for (inicialização;teste logico; incremento){
    console.log()
} */

let valores = [8, 1, 7, 4, 2, 9]

/* console.log(valores) // mostra na tela [ 8, 1, 7, 4, 2, 9 ]

console.log(valores[0]) // mostra na tela os vetores enfileirados em coluna
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */


//percurso para exibição de vetores:
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
Saida
A posição 0 tem o valor 8
A posição 1 tem o valor 1
A posição 2 tem o valor 7
A posição 3 tem o valor 4
A posição 4 tem o valor 2
A posição 5 tem o valor 9*/

//Para simplificar usando: for (___in___){ Console.log(______)}

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //essa sintaxe do for só fuciona para arrays e objetos
}