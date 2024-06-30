let podeContratar = (altura, sexo) => {

    if ( sexo == 'm')
    {
            if (altura >=1.75)
            {
                return "sim";
            }
            else
            {
                return "nao";
            }
    }

    if ( sexo == 'f')
    {
            if (altura >=1.80)
            {
                return "sim";
            }
            else
            {
                return "nao";
            }
    }
}

module.exports = podeContratar;
//console.log(podeContratar(1.79999, 'f'));