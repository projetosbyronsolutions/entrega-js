function acharFatorial(lista) {
    let x = 1;

    for (let i = 1; i <= lista; i++) {
        x *= i;
    }


    return x;
}

module.exports = acharFatorial;