let classificarTriangulo = (n1, n2, n3) => {
    if (n1 == n2 && n2 == n3)
    {
        return "equilatero";
    }
    else if (n1 == n2 && n2 != n3 || n1 == n3 && n1 != n2 || n2 == n3 && n2 != n1)
    {
        return "isosceles";
    }
    else 
    {
        return "escaleno";
    }
}

console.log(classificarTriangulo);

module.exports = classificarTriangulo;