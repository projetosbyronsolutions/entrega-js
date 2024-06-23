let ordenarValores = (a, b, c) => {
    let string = [a, b, c];
    let i, j, aux;
    for (i = 0; i < string.length; i++) {
        for (j = i + 1; j < string.length; j++) {
            if (string[i] > string[j]) {
                aux = string[i];
                string[i] = string[j];
                string[j] = aux;
            }
        }
    }
    return string;
};

console.log(ordenarValores(3, 1, 2)); // Example usage
module.exports = ordenarValores;
