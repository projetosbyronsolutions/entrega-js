# Problema 3

Uma empresa aérea quer contratar novos comissários de vôo. Se a pessoa for homem, a altura mínima
exigida é de 1,75m. No caso das mulheres, é necessário ter ao menos 1,80m de altura. Faça uma função
que tenha como parâmetros a altura (valor real) e o sexo (m ou f) de uma pessoa e informe se ela pode ou não ser contratada.
Sua função deve retornar apenas as respostas “sim” ou “nao”.

**Interface**

```javascript
podeContratar(altura,sexo)
```

| Parâmetros                                                           |  Retornos |
|-----------------------------------------------------------------|----------------|
| `podeContratar(1.74, 'm')  `                         | `"nao"`          |
| `podeContratar(1.76, 'm')`                           | `"sim" `         |
| `podeContratar(1.79, 'f')`                           | `"sim"`          |
| `podeContratar(1.81, 'f')`                           | `"sim"  `        |