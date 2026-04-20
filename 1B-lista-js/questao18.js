   const ehPrimo = (n) => {
        let divisores = 0
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                divisores += 1
            }
        }
        if (divisores < 2) {
            return true
        }
        else {
            return false
        }
    }

for (let n = 2; n <= 20; n++) {  
    if (ehPrimo(n)) {
        console.log(n)
    }
}