function separarCPF(cpf){

    let cpf1 = cpf[0] + cpf[1] + cpf[2]
    let cpf2 = cpf[4] + cpf[5] + cpf[6]
    let cpf3 = cpf[8] + cpf[9] + cpf[10]
    let cpf4 = cpf[12] + cpf[13]

    let arrayCPF = [cpf1, cpf2, cpf3, cpf4]

    return arrayCPF
}

console.log(separarCPF("123.456.789-10"))