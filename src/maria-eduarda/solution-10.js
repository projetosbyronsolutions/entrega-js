function formarTriangulo(n1, n2, n3) {
    let array = [n1,n2,n3];
    array.sort((a, b) => a - b);
    if ((array[0] + array[1]) > array[2]) {
        return "sim";
    } else {
        return "não";
    }
}
module.exports = formarTriangulo;
