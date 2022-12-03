import { Col } from 'antd';
import Searcher from './components/Search';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg'
import './App.css';
import { useEffect, useState } from 'react';
import getPokemon from './api';

function App() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonRes = await getPokemon();
      setPokemon(pokemonRes);
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
