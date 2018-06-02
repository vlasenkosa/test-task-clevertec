import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { appReducer } from '../Reducers/index';

const clientLogger = store => next => action => {
    let result;
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const middleware = [clientLogger, thunk];

const storeFactory = (initialState = {}) =>
    applyMiddleware(...middleware)(createStore)(
        combineReducers({ appReducer }), initialState);

export default storeFactory;
