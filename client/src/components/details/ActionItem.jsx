import React from 'react'
import Button from '@mui/material/Button'
import "../../style/Product/productDetails.css"
import {ShoppingCart,FlashOn} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from "../../redux/actions/cartActions.js";
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/Paytm';

const ActionItem = ({product}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);

  const {id} = product;

  const addItemToCart = ()=>{
      dispatch(addToCart(id,quantity));
      navigate('/cart');
  }

  const buyNow = ()=>{
    let response = payUsingPaytm({amount:500,email:"codeforinterview01@gmail.com"})
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response
    }
    post(information);
  }
  return (
    <div className='leftcontainer'>
      <div>
        <img className="image" src={product.detailUrl} alt="product_image" />
      </div>
      <Button className='buttonStyle' onClick={()=>addItemToCart()}style={{marginRight:"10px",backgroundColor:"#ff9f00"}} variant="contained" color="primary"><ShoppingCart /> Add to cart</Button>
      <Button className='buttonStyle' onClick={()=>buyNow()} style={{backgroundColor:"#fb541b"}} variant="contained" color="primary"><FlashOn/> Buy now</Button>
    </div>
  )
}

export default ActionItem
