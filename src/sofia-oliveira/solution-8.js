function acharFatorial(lista) {
    let n = 1;
    for(let i = 1; i <= lista; i++){
        n *= i;
    }
    return n;
}

module.exports = acharFatorial;