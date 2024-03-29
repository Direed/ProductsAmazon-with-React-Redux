import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger, thunk),
    ))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
