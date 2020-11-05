import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';
import {compose} from "redux";

// UI ANT DESIGN
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

// Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";

// Redux-Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/';

// Reducers
import allReducers from './reducers';

// Components
import './index.css';
import App from './App.jsx';

// Router
import { BrowserRouter} from "react-router-dom";

// Middleware Saga
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// let store = createStore(allReducers, compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
