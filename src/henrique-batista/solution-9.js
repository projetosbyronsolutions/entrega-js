let acharMaior = (lista) => {
    let i, fibonacci = [0, 1];
    if (lista == 0)
    {
        fibonacci = [0];
        return fibonacci;
    }
    if (lista == 1)
    {
        return fibonacci;
    }
    for (i = 2; i < lista; i++)
    {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

console.log(acharMaior);

module.exports = acharMaior;