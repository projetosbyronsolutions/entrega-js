# Entrega da primeira semana de Javascript!

Olá futuro byroniano, tudo certo? Esperamos que tenha gostado desta primeira
introdução a formosa linguagem que é o Javascript. Como a base de todo bom
desenvolvedor é o seu raciocínio, trouxemos alguns probleminhas para você exercita-lo, 
além de se acostumar com a sintaxe da linguagem. Boa sorte!  

## Instruções

Os problemas estão descritos (advinha...) na pasta _problemas/_. Se atente à seção de _Interface_
de cada problema, ela descreve a API (nome e parâmetros) da sua função de solução.  

Todas as suas soluções devem ser feitas em **arquivos separados dentro de uma pasta 
com o seu nome** no diretório _src/_, por exemplo:

```
├── problemas
│   └── problema-1.js
│   └── problema-2.js 
├── src
│   └── seu-nome-aqui
│       └── solution-1.js
│       └── solution-2.js

```

Além disso, você também precisa exportar sua função para que nossos testes possam valida-la,
basta incluir:

```
module.exports = <nomeDaSuaFuncao>
```

No final de seu arquivo.

## Rodando os testes

Para você verificar se seu código está correto, basta:

1. Ter instalado as dependências com: 
```
npm i
```

2. Rodar:
```
npm run test
```

## Submetendo suas soluções

Agora que você resolveu todos os problemas e os validou rodando os testes localmente, você
está pronto para realizar o Pull Request (PR)! Notas:

1. Todo PR deve possuir no mínimo um revisor (um membro de DPJ ou a própria conta da diretoria);
2. O código só será aceito se todos os testes passarem;


E pronto! Você acaba de dar seu primeiro passo ~~de milhares~~ para se tornar um _js-wizard_


### Disclaimer 

Obviamente tu pode usar o chatGPT ou pesquisar na internet a solução para os problemas,
e se você realmente ficar travado em algum deles eu até recomendo fazer isso. Com uma única
condição: **tu vai ler, reler, e tentar fazer de novo sem olhar pra resposta**; por incrível
que pareça esse é um bom jeito de se acostumar com _patterns_ e soluções nas quais não está
acostumado. Porém tu pode me perguntar: "Mas se posso usar esses recursos, por quê aprender na raça?"

Bem, existem inúmeras razões, daria um blog post inteiro para isso, mas a mais direta é: Se você for
raptado por terroristas, no meio do deserto, e eles te derem a condição de só te soltarem se você 
escrever uma função de uma linha em JS que devolve quantos valores  _falsy_ uma lista 
possui (uma pequena variação do problema 2), você vai querer ter aprendido a programar sem rodinhas.

Não digam que não avisei :)
