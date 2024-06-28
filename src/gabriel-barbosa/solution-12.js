function separarCPF(cpf){

    let cpf1 = String(cpf[0])+ String(cpf[1]) + String(cpf[2])
    let cpf2 = String(cpf[4])+ String(cpf[5]) + String(cpf[6])
    let cpf3 = String(cpf[8])+ String(cpf[9]) + String(cpf[10])
    let cpf4 = String(cpf[12]) + String(cpf[13])

    let arrayCPF = [cpf1, cpf2, cpf3, cpf4]

    return arrayCPF
}

console.log(separarCPF("123.456.789-10"))

module.exports = separarCPF