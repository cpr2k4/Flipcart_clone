import axios from "axios";
import * as actionTypes from "../constants/productConstants.js";

let URL = "http://localhost:8000";

// function + thunk
export const getProducts = ()=> async(dispatch)=>{
    try{
        let {data} = await axios.get(`${URL}/products`);
        dispatch({type : actionTypes.GET_PRODUCTS_SUCCESS,payload : data});
    }
    catch(err){
        dispatch({type : actionTypes.GET_PRODUCTS_FAILURE,payload:err.message});
    }
}

//get product details for a single product
export const getProductDetails = (id)=> async(dispatch)=>{
    try{
        let {data} = await axios.get(`${URL}/products/${id}`);
        dispatch({type : actionTypes.GET_PRODUCT_DETAILS_SUCCESS , payload : data});
    }   
    catch(err){
        dispatch({type : actionTypes.GET_PRODUCT_DETAILS_FAILURE, payload:err.message});
    }
}
