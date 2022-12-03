import axios from 'axios'

const getPokemon = () => {
  return axios.get('https:pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  .then(resp => resp.data.result)
  .catch(err => console.log(err))
}

export default getPokemon;