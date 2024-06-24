function acharMaior (lista){

    let i, index, maior;
    maior = lista[0];

    for(i =0; i<lista.length; i++)
    {
        if(maior < lista[i])
        {
            maior = lista[i];
            index =i;

        }
    }

    return [maior, index];

}

//console.log(acharMaior([2, 113, 45, 0, 6, 20000]));

module.exports = acharMaior;