import * as actionTypes from "../constants/productConstants.js";

export const getProductsReducer = (state={products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS: 
            return {products : action.payload}

        case actionTypes.GET_PRODUCTS_FAILURE:
            return {error : action.payload}

        default :
            return state;
    }
};

export const getProductDetailsReducer = (state = { product:{}}, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {laoding:true};
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload}; // Update product details
        case actionTypes.GET_PRODUCT_DETAILS_FAILURE:
            return { loading: false, error: action.payload }; // Update error state
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return { product: {}}; // Reset product details
        default:
            return state;  //gotta fix this!
    }
}