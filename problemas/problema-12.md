# Problema 12

O seu professor gostaria de fazer um programa com as seguintes características:

1.Leia os dados de um CPF no formato XXX.YYY.ZZZ-DD;
2.Imprima os quatro números, sendo um valor por linha.

## Parâmetros da função
O parâmetro  tem o seguinte formato "XXX.YYY.ZZZ-DD", onde XXX, YYY, ZZZ, DD são números inteiros. 

## Retorno da função    
A função deve retornar uma array contendo os quatro números inteiros do CPF.

**Interface**

```javascript
separarCPF(cpf)
```

| Parâmetros                      | Retornos |
|---------------------------------|----------|
| `separarCPF("123.456.789-10")`  | `[123, 456, 789, 10]`  |
| `separarCPF("111.222.333-44")`  | `[111, 222, 333, 44]`  |
| `separarCPF("000.000.000-00")`  | `[000, 000, 000, 00]`  |
| `separarCPF("999.888.777-66")`  | `[999, 888, 777, 66]`  |
```
