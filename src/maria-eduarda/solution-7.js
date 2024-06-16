function DivideXY(x, y) {
    if (y <= 0 && x <=0) {
        return "divisao impossivel";
    } else {
        divisao = x / y;
        return divisao;
    }
}
module.exports = DivideXY;
