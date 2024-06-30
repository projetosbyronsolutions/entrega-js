function formarTriangulo(a, b, c) {
    
    if (a + b > c && a + c > b && b + c > a) {
        return "sim"; 
    } else {
        return "não"; 
    }
}

module.exports = formarTriangulo;


//console.log(formarTriangulo(3, 4, 5)); // sim
