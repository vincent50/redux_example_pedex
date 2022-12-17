import { Col } from 'antd';
import Searcher from './components/Search';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg'
import './App.css';
import { useEffect } from 'react';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonRes = await getPokemon();
      const pokemonDetailed = await Promise.all(pokemonRes.map(pokemon => 
        getPokemonDetails(pokemon)
      ))
      dispatch(setPokemons(pokemonDetailed));
    } 

    fetchPokemon();
      
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
