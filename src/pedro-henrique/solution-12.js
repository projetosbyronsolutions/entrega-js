function separarCPF(cpf){
    
    let separa=cpf.split(/[.-]/)


  const num=separa.map((part)=>parseInt(part.trim(), 10));

  return num;

    }

module.exports=separarCPF