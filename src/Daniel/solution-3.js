
  

function podeContratar(altura,sexo){
  
    if(sexo=='m'){
        if(altura>=1.75){
            return "sim"
        }else{return "nao"}
    }else{
        if(altura>=1.80){  return "sim"}
        else{  return "nao"}
    }
    
}


module.exports = podeContratar