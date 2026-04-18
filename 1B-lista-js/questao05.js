const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira a temperatura: ", (T) => {
    console.log(`${T}°C equivale a ${(T * (9/5)) +32 }°F`);
    rl.close();
});