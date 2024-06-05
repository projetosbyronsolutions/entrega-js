# Problema 7

Escreva um algoritmo que receba 2 números e retorne o resultado da divisão do primeiro pelo segundo. Caso não for possível retorne a mensagem “divisao impossivel” para os valores em questão.

## Parâmetros da função
São os dois números inteiros a serem divididos.

## Retorno da função
O retorno é um número real que representa o resultado da divisão ou a mensagem “divisao impossivel” caso não seja possível realizar a divisão.

**Interface**

```javascript
DivideXY(numero1, numero2)
```

| Parâmetros                         | Retornos                     |
|---------------------------------|---------------------------|
| `DivideXY(3, 3)`                | 1.0                     |
| `DivideXY(3, -2)`               | -1.5                    |
| `DivideXY(-8, 0)`               | "divisao impossivel"    |
| `DivideXY(0, 8)`                | 0.0                     |

