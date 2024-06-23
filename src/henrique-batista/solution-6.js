let acharMaior = (lista) => {
    let i, j, maior = lista[0], index;
    for (i = 1; i < lista.length; i++)
    {
        if (lista[i] > maior)
        {
            maior = lista[i];
            index = i;
        }
    }

    return [maior, index];
}

console.log(acharMaior);

module.exports = acharMaior;