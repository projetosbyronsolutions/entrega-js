function calcularRaizes(A, B, C){
  
    let delta= ((B*B)-(4*A*C))

    if(delta<0 || A==0){
       return "Impossivel calcular"
    }else{
        const deltaraiz=Math.sqrt(delta)
        let r1= (-B+deltaraiz)/(2*A)
        let r2= (-B-deltaraiz)/(2*A)

       let R1=r1.toFixed(5)
       let R2=r2.toFixed(5)

        return [R1,R2]
    }
   
}
console.log(calcularRaizes)



module.exports = calcularRaizes