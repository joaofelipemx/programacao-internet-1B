const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite um número: ", (n) => {
    n = Number(n)
    console.log(`\nTabuada do ${n}`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`)
    }
    rl.close();
});