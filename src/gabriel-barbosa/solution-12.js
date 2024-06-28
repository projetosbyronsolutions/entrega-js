function separarCPF(cpf){
    let arrayCPF = cpf.split(/[.-]/).map(Number)

    return arrayCPF
}

console.log(separarCPF("123.456.789-10"))

module.exports = separarCPF