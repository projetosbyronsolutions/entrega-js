function acharFatorial(n) {
    let fatorial = 1;
    for (let i = 1; i <= n; i++){
        fatorial = fatorial * i;
    }
    return fatorial;
}
module.exports = acharFatorial;
