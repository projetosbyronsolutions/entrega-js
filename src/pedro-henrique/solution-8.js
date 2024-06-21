function acharFatorial(lista){


let b= lista

if ((lista===1)||(lista===0)){
    return 1
}
else{

while (b > 1){
  lista = lista *(b-1); b--;
                    }

    return lista
                }


}
module.exports = acharFatorial