import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// UI ANT DESIGN
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";

// Redux-Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/";

// Reducers
import allReducers from './reducers';

// Components
import './index.css';
import App from './App.jsx';

// Middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
