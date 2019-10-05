import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";


import rootReducer from './reduxStore/reducers/index';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
            <App/>,
        </BrowserRouter>

    </Provider>,

    document.getElementById('root'));


