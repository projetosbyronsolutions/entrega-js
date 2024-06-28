function acharFatorial(N){
    if(N == 0 || N == 1){
        let fat = 1
        
        return fat
    }
    else{
        let fat = 1
        
        for(let i = N; i > 1; i--){
            fat = fat * i
        }

        return fat
    }
}

console.log(acharFatorial(10))

module.exports = acharFatorial