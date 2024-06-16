function acharMaior(num) {
    //achar o maior
    var maior = num.reduce((acumulador, atual) => {
        return acumulador > atual ? acumulador : atual;
    });
    //descobrir a posição do maior
    let posicao = num.findIndex((elemento) => elemento === maior);

    return [maior, posicao ];
}

module.exports = acharMaior;
