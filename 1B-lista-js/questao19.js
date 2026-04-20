function fatorial(n) {
    let multiplicador = 1
    for (let i = 2; i <= n; i++) {
        multiplicador *= i
    }
    return multiplicador
}
console.log(fatorial(5))