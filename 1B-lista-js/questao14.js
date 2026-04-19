const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5]

let somaNota = 0
let somaAcimaNota = 0
for (let nota of notas) {
    somaNota += nota
    if (nota >= 6) {
        somaAcimaNota += 1
    }
}
console.log(`A média da turma é de ${somaNota/notas.length}`)
console.log(`${somaAcimaNota} alunos ficaram acima da média.`)