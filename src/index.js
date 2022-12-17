import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import { pokemonsReducer } from './reducers/pokemons';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonsReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
