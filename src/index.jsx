import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './Components/App/App';

import storeFactory from './Components/StoreFactory/index';

import initialState from './Components/StoreFactory/initialState';

const store = storeFactory(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container'),
);
