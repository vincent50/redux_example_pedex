import { Col } from 'antd';
import Searcher from './components/Search';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg'
import './App.css';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions'

function App({pokemons, setPokemons}) {
  
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonRes = await getPokemon();
      //console.log(pokemonRes)
      setPokemons(pokemonRes);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
