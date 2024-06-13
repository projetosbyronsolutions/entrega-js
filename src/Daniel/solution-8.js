function acharFatorial(N) {
    if (N === 0) {
        return 1
    }

    let fatorial = 1

    for (let i = 1; i <= N; i++) {
        fatorial *= i
    }

    return fatorial
}

console.log(acharFatorial)
module.exports=acharFatorial