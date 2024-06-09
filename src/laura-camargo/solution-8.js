function acharFatorial(N) {
  let fatorial = 1;

  for (let i = N; i > 1; i--) {
    fatorial *= i;
  }

  return fatorial;
}

module.exports = acharFatorial;
