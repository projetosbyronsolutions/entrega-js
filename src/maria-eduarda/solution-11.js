function classificarTriangulo(n1, n2, n3) {
    if (n1 != n2 && n1 != n3 && n3 != n2) {
        return "escaleno";
    } else if (n1 == n2 && n1 == n3) {
        return "equilatero";
    } else {
        return "isosceles";
    }
}
module.exports = classificarTriangulo;
