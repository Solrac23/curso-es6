const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK')}, 2000)
})

// async function executaPromise() {
//   console.log(await minhaPromise())
//   console.log(await minhaPromise())
//   console.log(await minhaPromise())
// }

// Não poderia executar dessa forma, pois daria um erro
// await executaPromise()

const executaPromise = async () => {
  console.log(await minhaPromise())
  console.log(await minhaPromise())
  console.log(await minhaPromise())
}

executaPromise()