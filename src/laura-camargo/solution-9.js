function acharMaior(N) {
  const fibonacci = [];

  if (N === 0) {
    return [0];
  }

  if (N >= 1) fibonacci.push(0);
  if (N >= 2) fibonacci.push(1);
  for (let i = 2; i < N; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
}

module.exports = acharMaior;
