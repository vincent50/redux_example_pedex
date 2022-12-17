import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import { pokemonReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, 
  compose,
  legacy_createStore as createStore, 
} from 'redux';
import { logger } from './middlewares'


const root = ReactDOM.createRoot(document.getElementById('root'));

const composEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
)

const store = createStore(pokemonReducer, composEnhancers)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
