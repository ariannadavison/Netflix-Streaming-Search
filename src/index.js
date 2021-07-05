import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {searchReducer} from './SearchBox'
import { createStore, combineReducers ,connect} from 'redux'

import { Provider } from 'react-redux'
const reducer = combineReducers({input:searchReducer})
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>

  <Provider store={store} >
    <App />
  </Provider>
    </React.StrictMode>,
    document.getElementById('root')

)

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
