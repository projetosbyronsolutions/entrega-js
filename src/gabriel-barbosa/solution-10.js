function formarTriangulo(n1,n2,n3){
    if(n1 + n2 > n3 && n2 + n3 > n1 && n1 + n3 > n2){
        return "sim"
    }
    else{
        return "não"
    }
}

console.log(formarTriangulo(7, 10, 5))

module.exports = formarTriangulo