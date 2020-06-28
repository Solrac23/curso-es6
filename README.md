# O que é o Babel ?
*O babel será o reponsável por transformar as nossas features ES6, ES7 ES8...De forma que todos os navegadores entendam*

## Pra que serve babel/preset-env
**O preset-env entende qual ambiente estamos desenvolvendo por exemplo:**
- *Nodejs*
- *React*
- *React-Native*
**etc. Além de converter as features do ES6 para que os navegadores não entendem.**
## O que é o webpack ?
O webpack é como se fosse um serviço que, permite trabalhar com vários arquivos JS. <br/>
Não só arquivo js, mas também JSON e arquivos de imagem. Porém no final de tudo ainda a vai ser convertido em só arquivo bundle.
### 1. Instalando babel
- yarn add @babel/cli: permite alterar algumas linhas de comando como o yarn.
- yarn add @babel/present-env

### 2. Instalando WebPack
- yarn add webpack webpack-cli -D

**Obs: webpack é apenas para desenvolvimento do projeto e não para produção, assim com o babel.**