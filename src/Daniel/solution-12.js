function separarCPF(cpf) {
    let partes = cpf.split(/[.-]/)

    let numeros = partes.map(Number)

    return numeros
}
console.log(separarCPF)
module.exports = separarCPF