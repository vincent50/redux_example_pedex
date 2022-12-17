import { Col, Spin } from 'antd';
import Searcher from './components/Search';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg'
import './App.css';
import { useEffect } from 'react';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons, getPokemonsWithDetails, setLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector(state => state.get('pokemons')).toJS();
  const loading = useSelector(state => state.get('loading'));
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonRes));
      dispatch(setLoading(false));
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
      
      { loading ? 
        <Col offset={12}>
          <Spin spinning size='large'/>
        </Col>
        : 
        <PokemonList pokemons={pokemons}/>
      }
      
    </div>
  );
}

export default App;
