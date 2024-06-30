function acharMaior (lista){

    let mango = [];
    mango [0] = 0;
    mango [1] = 1;
    
    if (lista === 0)
    {
        return mango [0];
    }
    if (lista === 1)
    {
        return mango [1];
    }
    
    
    for(i = 2; i<lista; i++)
    {    
        mango [i] = mango[i-1] + mango[i-2];
    
    }   
        
        return mango;
}

module.exports = acharMaior;

//console.log(acharMaior(5));