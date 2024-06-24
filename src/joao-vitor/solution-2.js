function qtdTruthy (lista)
{
    let count = 0;
    lista.forEach(element => {
         
         if(element){
            count++;
         }
         
    });
    return count;
}

module.exports = qtdTruthy;

//const testArray1 = [2, 'asdf', [], true]; 

//console.log(qtdTruthy(testArray1));