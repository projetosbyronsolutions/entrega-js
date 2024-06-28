function classificarTriangulo(n1, n2, n3){
    if(n1 == n2 && n2 == n3){
        return "equilatero"
    }
    else if(n1 != n2 && n2 != n3 && n1 != n3){
        return "escaleno"
    }
    else{
        return "isosceles"
    }
}

console.log(classificarTriangulo(3,4,5))

module.exports = classificarTriangulo