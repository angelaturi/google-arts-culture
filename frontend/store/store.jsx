import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
// import rootMiddleware from '../middleware/root_middleware'

const configureStore = (preloadedState={}) => (
    // createStore(rootReducer, preloadedState, rootMiddleware)
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))
)

export default configureStore