import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'
import { getProductsReducer,getProductDetailsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer.js';

const reducer = combineReducers({
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    cart : cartReducer
})

let middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)



export default store;