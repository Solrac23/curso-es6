const usuario = {
  nome: 'Carlos',
  idade: 20,
  endereco: {
    cidade: 'Manaus',
    estado: 'AM'
  }
}
// const { nome, idade, endereco: { cidade }} = usuario
function mostraNome({ nome }){
  console.log(nome)
}
mostraNome(usuario)




const arr = [1, 3, 4, 5, 8, 9]

// map serve para percorrer o vetor e retornar algo de dentro
const newArr = arr.map(function(item, index) {
  return item + index
})

console.log(newArr)

const sum = arr.reduce(function(total, next) {
  //pega o total e soma com o proximo
  return total + next
})

console.log(sum)

const filter = arr.filter(function(item) {
  //Filtro dentro do array
  return item % 2 == 0
})

console.log(filter)

const find = arr.find(function(item) {
  return item == 4
})

console.log(find)

const teste = () => ({nome: 'Diego'}) // parentese e chaves apenas para objetos

