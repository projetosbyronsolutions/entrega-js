
  

function podeContratar(altura,sexo){
  
    if(sexo=='m'){
        if(altura>=1.74){
            return "sim"
        }else{return "não"}
    }else{
        if(altura>=1.80){  return "sim"}
        else{  return "não"}
    }
    
}
console.log(podeContratar)

module.exports = podeContratar