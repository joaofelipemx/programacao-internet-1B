const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("A: ", (a) => {
    rl.question("B: ", (b) => {
        rl.question("C: ", (c) => {
            a = Number(a)
            b = Number(b)
            c = Number(c)
            if (a > b && a > c) {
                console.log(`O maior número é ${a}`)
            }
            else if (b > a && b > c) {
                console.log(`O maior número é ${b}`)
            }
            else {
                console.log(`O maior número é ${c}`)
            }              
            rl.close();
        });
    
    });
});