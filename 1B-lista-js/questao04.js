const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite seu nome: ", (nome) => {
    rl.question("Digite seu ano de nascimento: ", (ano) => {
        console.log(`Olá, ${nome}! Você tem aproximadamente ${2026 - Number(ano)} anos`)
        rl.close();
    });
    
});

