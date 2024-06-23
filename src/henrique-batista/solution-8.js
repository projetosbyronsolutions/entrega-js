let acharFatorial = (lista) => {
    let i, fatorial = 1;
    for (i = 1; i <= lista; i++)
    {
        fatorial *= i;
    }
    return fatorial;
}

console.log(acharFatorial);

module.exports = acharFatorial;