function acharMaior(N){
    let fibonacci = []

    if(N === 0){
        fibonacci.push(0)

        return fibonacci
    }
    else if(N === 1){
        fibonacci.push(0, 1)

        return fibonacci
    }
    else{
        fibonacci.push(0, 1)

        for(let i = 2; i < N; i++){
            let proxNum = Number(fibonacci[fibonacci.length - 1]) + Number(fibonacci[fibonacci.length - 2])
            fibonacci.push(proxNum)
        }

        return fibonacci
    }
}

console.log(acharMaior(10))