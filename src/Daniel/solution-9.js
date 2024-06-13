function gerarFibonacci(N) {
    // Se N for 0, retorna um array vazio
    if (N === 0) {
        return []
    }

    let fibonacci = Array(N)

    fibonacci[0] = 0
    if (N > 1) {
        fibonacci[1] = 1
    }

    for (let i = 2; i < N; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    return fibonacci
}

console.log(gerarFibonacci)
module.exports(gerarFibonacci)