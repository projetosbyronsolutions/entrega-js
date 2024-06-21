function acharMaior(N){
    
    const fib =[]
    let i

    if (N===0){
        return [0]
    }

    if (N>=1) {
        fib.push(0)
    }
    if (N>=2){
        fib.push(1)
    }
    for (i=2;i < N; i++){
        

        fib.push(fib [i-1] + fib[i-2])

        
    }
return fib
}
module.exports= acharMaior