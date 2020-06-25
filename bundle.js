"use strict";

var usuario = {
  nome: 'Carlos',
  idade: 20,
  endereco: {
    cidade: 'Manaus',
    estado: 'AM'
  }
}; // const { nome, idade, endereco: { cidade }} = usuario

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);
var arr = [1, 3, 4, 5, 8, 9]; // map serve para percorrer o vetor e retornar algo de dentro

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  //pega o total e soma com o proximo
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  //Filtro dentro do array
  return item % 2 == 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item == 4;
});
console.log(find);

var teste = function teste() {
  return {
    nome: 'Diego'
  };
}; // parentese e chaves apenas para objetos
