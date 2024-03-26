import axios from 'axios';
import * as actionType from "../constants/cartConstants.js";

const URL = "http://localhost:8000";
//function + thunk
export const addToCart = (id,quantity)=>async(dispatch)=>{
    try{
       let {data} = await axios.get(`${URL}/products/${id}`);
       dispatch({type:actionType.ADD_TO_CART, payload: {...data,quantity}});
    }
    catch(err){
        dispatch({type:actionType.ADD_TO_CART_ERROR, payload: error.message});
    }
}

export const removeFromCart =(id)=> (dispatch)=>{
    dispatch({type: actionType.REMOVE_FROM_CART, payload : id});
}