function calculadora(a, b, operacao) {
    switch (operacao) {
        case "soma": return a + b
        case "subtracao": return a - b
        case "multiplicacao" : return a * b
        case "divisao": 
            if (b === 0 ) {
                return "Erro: Divisão por zero"
            }
            return a / b
        default: return "Operação inválida!"
    }
}

const operacoes = [
    { a: 10, b: 5, op: "soma" },
    { a: 20, b: 4, op: "divisao" },
    { a: 7, b: 0, op: "divisao" },
    { a: 3, b: 8, op: "multiplicacao" }
];

for (let i = 0; i < operacoes.length; i++) {
    let a = operacoes[i].a
    let b = operacoes[i].b
    let op = operacoes[i].op

    console.log(calculadora(a, b, op))
}