import React from 'react'
import "../../style/cart/cartStyle.css";
import {Button} from '@mui/material';
import { addEllipsis } from '../../utils/Ellipsis';
import GroupedButton from './ButtonGroup';


const CartItem = ({item,removeItemFromCart}) => {
  const fassuredUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <div className='Component'>
        <div className='leftComponent'>
            <img src={item.url} alt="product_img" height={110} width={110}/>
            <GroupedButton />
        </div>
        <div>
            <p>{addEllipsis(item.title.longTitle)}</p>
            <p className='smallText' style={{margin:"0.25rem 0 0.5rem 0"}}>
                <span >Seller: RetailNet</span>
                <img src={fassuredUrl} alt="flipkart_logo" style={{width:"50px",marginLeft:"10px"}}/>
            </p>
            <p style={{margin:"20px 0"}}>
              <span style={{fontWeight:600}}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
              <span style={{color:"#878787"}}><strike>{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
              <span style={{color:"#388E3C"}}>{item.price.discount} off</span>
            </p>
            <Button className="removeBtn" onClick={()=>removeItemFromCart(item.id)} color='warning'>Remove Item</Button>
        </div>
    </div>
  )
}

export default CartItem
