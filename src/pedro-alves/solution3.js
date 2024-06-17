function podeSerContratado(altura, sexo) {
    if (sexo === "m" && altura >= 1.75) {
        return "sim";
    }


    else if (sexo === "f" && altura >= 1.8) {
        return "sim";
    }

    else {
        return "NaoPode";
    }
}

module.exports = podeSerContratado;