function ordenarValores(a, b, c) {
    let array = [a, b, c];
  
    array.sort((a, b) => a - b);
   
    return array;
  }
  
  module.exports = ordenarValores;
  