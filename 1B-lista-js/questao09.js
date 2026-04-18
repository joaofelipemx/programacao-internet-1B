const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite sua idade: ", (idade) => {
    idade = Number(idade)
    if (idade > 12 && idade <= 25) {
        rl.question("Tem carteirinha [true/false]? ", (temCarteirinha) => {
            let temCarteirinhaBool = temCarteirinha === "true"
            if (temCarteirinhaBool) {
                console.log("R$ 20,00")
                rl.close();
            }
            else {
                console.log("R$ 30,00")
                rl.close();
            }
        });
    }
    else {
        if (idade <= 12) {
            console.log("R$ 15,00")
        }
        else if (idade > 25 && idade <= 59) {
            console.log("R$ 30,00")
        }
        else if (idade >= 60) {
            console.log("R$ 15,00")
        }
        rl.close();
    }
});