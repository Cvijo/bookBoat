import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer';


export const configureStore = (preloadedState) => {
    const middlewares =[];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storeEnancers = [middlewareEnhancer];
    const composedEnhancer = composeWithDevTools(...storeEnancers);

    const store = createStore(
        rootReducer, 
        preloadedState, 
        composedEnhancer
    );

    if( process.env.NODE_ENV !== 'production') {
        if(module.hot) {
            module.hot.accept('../reducers/rootReducer', () => {
                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer);
            })
        }
    }

    return store;
}