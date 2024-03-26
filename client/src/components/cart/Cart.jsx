import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Grid from '@mui/material/Grid';
import CartItem from './CartItem';
import TotalView from './TotalView';
import { styled } from '@mui/system';
import "../../style/cart/cartStyle.css";
import { Button } from '@mui/material';
import { removeFromCart } from '../../redux/actions/cartActions';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)(({theme})=>({
  padding : "30px 135px",
  [theme.breakpoints.down('lg')]:{
    padding : "15px 0"
  } 
}))
  


const Cart = () => {
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (id)=>{
      dispatch(removeFromCart(id));
  }
  return (
    <>
      {
        cartItems.length ? 
          <Container container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
                <div className='header'>
                    <p>My Cart ({cartItems.length})</p>
                </div>
                {
                  cartItems.map(item=>(
                    <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                  ))
                }
                <div className='buttonWrapper'>
                  <Button variant='contained' style={{width:250}} color='warning'>Place Order</Button>
                </div>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems}/>
            </Grid>
          </Container>

        : <div>
          <EmptyCart />
        </div>
      }
    </>
  )
}

export default Cart
