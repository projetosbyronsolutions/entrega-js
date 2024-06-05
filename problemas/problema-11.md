# Problema 11
Carlos é um artesão que está criando peças decorativas em forma de triângulo usando barras de metal de comprimentos diferentes. Ele precisa classificar cada triângulo que cria como equilátero, isósceles ou escaleno para fins de registro.

## Parâmetros da função
Você receberá três números representando os comprimentos das barras de metal.

## Retorno da função
Seu programa deve retornar "equilátero" se todos os lados forem iguais, "isósceles" se dois lados forem iguais, ou "escaleno" se todos os lados forem diferentes.

**Interface**

```javascript
classificarTriangulo(n1, n2, n3)
```

| Parâmetros                           | Retornos        |
|--------------------------------------|-----------------|
| `classificarTriangulo(3, 3, 3)`      | `"equilatero"`  |
| `classificarTriangulo(3, 4, 4)`      | `"isosceles"`   |
| `classificarTriangulo(3, 4, 5)`      | `"escaleno"`    |
| `classificarTriangulo(5, 5, 5)`      | `"equilatero"`  |
