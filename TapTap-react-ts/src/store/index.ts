import { createStore ,compose,applyMiddleware } from 'redux'  
import reducers from './reducers' ;
import thunk, { ThunkMiddleware } from 'redux-thunk'  

const composeEnhancers = 
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;   

const store = createStore(reducers,  
    composeEnhancers(applyMiddleware(thunk as ThunkMiddleware)));

export type rootState = ReturnType<typeof reducers>  

export default store    
