function separarCPF(cpf) {
    let array = [], j = 0, k;
    for (let i = 0; i < cpf.length; i++)
    {
        if (cpf[i] != "." && cpf[i] != "-") 
        {
            if (array[j] === undefined)
            {
                array[j] = "";
            }
            array[j] += cpf[i];  
        } 
        else 
        {
            j++;
        }
    }
    for (k = 0; k < array.length; k++) 
    {
        array[k] = parseInt(array[k]);
    }
    return array;
      
}

console.log(separarCPF);

module.exports = separarCPF;
