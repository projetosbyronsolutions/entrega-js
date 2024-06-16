function separarCPF(cpf) {

    let array = [];
    let j = 0;
    for (let i = 0; i < cpf.length; i++){
        if (cpf[i] != "." && cpf[i] != "-") {
            if (array[j] === undefined) {
                array[j] = ""; 
            }
        array[j] += cpf[i];
        } else {
            j++;
        }
    }

    for (let k = 0; k < array.length; k++) {
        array[k] = parseInt(array[k], 10);
    }
    return array;
      
}
module.exports = separarCPF;
