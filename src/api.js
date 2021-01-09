import axios from 'axios'

// o método create irá criar uma configuração do axios.
const api = axios.create({
  baseURL: 'https://api.github.com' // As pesquisas da Api, vão partir deste endereço
})

export default api