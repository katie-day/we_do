import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formStore } from 'redux-form';
import store from './store';

const middleware = [thunkMiddleware];

const reducers = combineReducers({
    form: formStore,
    store,
});

export default createStore(
    reducers,
    compose(
        applyMiddleware(...middleware),
        // Expose store to Redux DevTools extension.
        global.devToolsExtension ? global.devToolsExtension() : fct => fct,
    ),
);
