
    function podeContratar(altura,sexo) {
        

        if ((sexo === "m") && (altura>= 1.75)){
            return "sim"
            
        }
        else
        if((sexo === "f") && (altura>= 1.80)){
            return "sim"
        }
        else {
            return "nao"
        }

        }

        module.exports = podeContratar