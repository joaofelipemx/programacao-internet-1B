//let tentativas = 0;
//let acertou = false;

//while (!acertou) {
//  tentativas++;
//  let chute = Math.floor(Math.random() * 10);
  // "Math.random()": 
//  if (chute === 7) acertou = true;
//}
//console.log(`Acertou em ${tentativas}x`);

function calcularAreaV1(base, altura){
    return (base * altura) /2;
}

const calcularAreaV2 = function(base, altura) {
    return (base * altura)/2;
}

const calcularAreaV3 = (base,altura) => (base * altura) / 2;

console.log(calcularAreaV1(10, 5))
console.log(calcularAreaV2(10, 5))
console.log(calcularAreaV3(10, 5))