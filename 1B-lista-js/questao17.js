function calcularIMC(peso, altura){
    return peso/(altura**2)
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    }
    else if (imc < 25) {
        return "Normal"
    }
    else if (imc < 30) {
        return "Sobrepeso"
    }
    else {
        return "Obesidade"
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Peso: ", (p) => {
    rl.question("Altura: ", (a) => {
        if (isNaN(p) || isNaN(a)) {
            console.log("Digite valores válidos!")
            rl.close()
            return
        }
        
        p = Number(p)
        a = Number(a)
        console.log(`Seu IMC é de ${calcularIMC(p, a)}, se enquadrando em ${classificarIMC(calcularIMC(p, a))}`)
        rl.close()
    });
});