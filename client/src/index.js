import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';


const middleware = [ ReduxThunk, ReduxPromise ]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
