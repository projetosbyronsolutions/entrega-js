function classificarTriangulo(a, b, c){
    if(a == b && b == c){
        return console.log("equilatero")
    }else if(a != b && b != c){
        return console.log("escaleno")
    }else{
        return console.log("isosceles")
    }
}

module.exports = classificarTriangulo;