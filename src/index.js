import React from 'react';
import App from './App';
import './index.css';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom/client';
import { pokemonReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, 
  compose,
  legacy_createStore as createStore, 
} from 'redux';
import { 
  logger, 
//  featuring 
} from './middlewares'


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composEnhancers = composeAlt(applyMiddleware(
    thunk,
    logger, 
    // featuring, // Permite agregar un pokemon personalizado al inicio
  ),
)

const store = createStore(pokemonReducer, composEnhancers)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
