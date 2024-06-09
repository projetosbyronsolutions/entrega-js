function formarTriangulo(n1, n2, n3) {
  if (n1 < n2 + n3 && n2 < n1 + n3 && n3 < n1 + n2) {
    return "sim";
  } else {
    return "não";
  }
}

module.exports = formarTriangulo;
