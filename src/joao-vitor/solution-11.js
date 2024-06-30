function classificarTriangulo(n1, n2, n3) {
    
    if (n1 === n2 && n2 === n3) 
    {
        return "equilátero";
    } else if (n1 === n2 || n1 === n3 || n2 === n3) 
    {
        return "isosceles"; 
    } 
    else 
    {
        return "escaleno"; 
    }
}

module.exports = classificarTriangulo;

//console.log(classificarTriangulo(3, 4, 5)); // escaleno

