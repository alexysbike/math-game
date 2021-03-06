import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { StoreContext } from 'redux-react-hook';
import 'nes.css/css/nes.min.css';
import App from './components/App';
import models from './modules';
import * as serviceWorker from './serviceWorker';
import TranslationService from './services/translation/service';

TranslationService.initialize();

const store = init({ models });

ReactDOM.render((
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
