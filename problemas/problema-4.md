# Problema 4

Use 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

## Parâmetros da função
Adicione os três valores de ponto flutuante (double) A, B e C.

## Retorno da função
Se não houver possibilidade de calcular as raízes, retorne a mensagem "Impossivel calcular". Caso contrário, retorne o resultado das raízes com 5 dígitos após o ponto dentro de um array que contêm 2 elementos: o primeiro elemento é a raiz R1 e o segundo elemento é a raiz R2.

**Interface**

```javascript
calcularRaizes(A, B, C)
```

| Parâmetros                         | Retornos                     |
|---------------------------------|---------------------------|
| `calcularRaizes(10.0, 20.1, 5.1)` | `[-0.29788, -1.71212]`      |
| `calcularRaizes(0.0, 20.0, 5.0)`  | `"Impossivel calcular"`     |
| `calcularRaizes(10.3, 203.0, 5.0)`| `[-0.02466, -19.68408]`     |
| `calcularRaizes(10.0, 3.0, 5.0)`  | `"Impossivel calcular"`     |

