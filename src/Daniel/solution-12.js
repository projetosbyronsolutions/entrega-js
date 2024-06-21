function separarCPF(cpf) {
    let partes = cpf.split(/[.-]/)

    let numeros = partes.map((part)=>parseInt(part.trim(),10))

    return numeros
}

module.exports = separarCPF