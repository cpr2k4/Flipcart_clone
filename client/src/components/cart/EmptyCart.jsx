import React from 'react'
import "../../style/cart/EmptyCart.css";
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate(); 
    const goToHome=()=>{
        navigate("/");
    }
  return (
    <div className='paddingMe'>
        <div className='emptyComponent'>
            <img className="emptyImg" src="/EmptyCart.png" alt="empty_cart_img" />
            <p style={{margin:0,fontSize:"1.1rem"}}>Your cart is empty!</p>
            <p style={{fontSize:"12px"}}>Add items to it now.</p>
            <Button className='shopBtn' onClick={goToHome} variant='contained'>Shop now</Button>
        </div>
    </div>
  )
}

export default EmptyCart
