import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import { pokemonReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonReducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
