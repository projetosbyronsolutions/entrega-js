function formarTriangulo(a, b, c){
    if(a + b > c && a + c > b && c + b > a){
        return console.log("sim");
    }else{
        return console.log("nao");
    }
}

module.exports = formarTriangulo;