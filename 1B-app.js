// let reais = 100;
// console.log(`R$${reais} = R$${reais/5.2}`);

// let idade = 16
// if (idade >= 18) {
//     console.log(`${idade} anos: maior de idade`)
// }
// else {
//     console.log(`${idade} anos: menor de idade`)
// }

//for (i = 10; i >= 0; i--) {
//    let contagem = i
//    if (contagem === 0) {
//        process.stdout.write(`${contagem}, "Fogo"!`)
//    }
//    else {
//        process.stdout.write(`${contagem}, `)
//    }
//}

// let idade = 17
//if (idade >=15) {
//    console.log("Você ja nao é mais adolescente")
//}
//else {
//    console.log("Voce tem menos de 15 anos!")
//}
//for (let i = 1; i <= idade; i++) {
//    console.log(i)
//}

//let nome = input

// 1 
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}
console.log(parOuImpar(4))

// 2
let soma = 0
function somar(n) {
    for (let i = 1; i <= n; i++){
        soma += i
    }
    return soma
}
console.log(somar(5))

// 3

function maior(a, b, c) {
    if (a > b and a > c)
}