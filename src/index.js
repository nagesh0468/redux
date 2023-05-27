import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const initial = {
  count : 0,
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case 'ADD':{
      const newValue = {
        count : state.count + action.payload,
      }
      return newValue;
    }
    case 'SUBTRACT' : {
      const newValue = {
        count : state.count - action.payload,
      }
      return newValue;
    }
    default : {
      return state;
    }
  }
}

const store = createStore(reducer);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

export default store;
