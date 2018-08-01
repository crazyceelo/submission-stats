//react
import React from 'react';
import ReactDOM from 'react-dom';

// react router
import { BrowserRouter } from 'react-router-dom';

// create react app package
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// create the actual store and reducer with dev tools
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

// render the entire app at this entry point
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
    document.getElementById('root'));
  registerServiceWorker();
