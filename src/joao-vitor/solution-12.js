function separarCPF(cpf) {
    // Utilizando expressão regular para extrair os números do CPF
    const numeros = cpf.match(/\d/g);
    
    // Agrupando os números em quatro partes
    let parte1 = parseInt(numeros.slice(0, 3).join(''), 10);
    let parte2 = parseInt(numeros.slice(3, 6).join(''), 10);
    let parte3 = parseInt(numeros.slice(6, 9).join(''), 10);
    let parte4 = parseInt(numeros.slice(9).join(''), 10);
    
    // Retornando os números em um array
    return [parte1, parte2, parte3, parte4];
}


module.exports = separarCPF;

//console.log(separarCPF("123.456.789-10"));