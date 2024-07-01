function acharFatorial(lista){

    let i, fat = 1;

    for(i = 1; i<=lista; i++)
    {
        fat = fat * i;


    }   
    return fat;
}

module.exports = acharFatorial;

//console.log(acharFatorial(10));

