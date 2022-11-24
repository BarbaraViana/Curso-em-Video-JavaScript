/* let num = []
console.log(`Meu numero é ${num}`) 

Para mostrar cada vetor na tela separado.
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
O que está entre chaves siginica a posição de cada vetor

for (inicialização;teste logico; incremento){
    console.log()
}

for (let pos = 0;pos<num.length;pos++){
    console.log()
}

*/

let num = [5, 8, 4]
num[3] = 6 //Acrescenta o valor a terceira posição.
num.push(7, 1) //Acrescenta o valor a ultima posição.
num.length //Mostra todos os elementos do array
num.sort() //coloca os elementos em ordem crescente
console.log(`meus numeros são ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor na posição 0 é ${num[0]}`)