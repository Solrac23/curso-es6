module.exports = {
  entry: './main.js',
  output: {
    path: __dirname, // Caminho do arquivo no caso o diretorio.
    filename: 'bundle.js' // nome do arquivo
  },
  module: {
    rules: [
      {
        test: /\.js$/, // determina somente arquivos js
        exclude: /node_modules/, // excluir o node_modules, para que o babel não execute nenhum arquivo do node
        use: {
          loader: 'babel-loader' // babel é um loader
        }
      }
    ],
  },
}