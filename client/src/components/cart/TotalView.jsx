import React from 'react'
import "../../style/cart/TotalView.css";
import { useState,useEffect } from 'react';

const TotalView = ({cartItems}) => {
  const [price,setPrice] = useState(0);
  const [discount,setDiscount] = useState(0);
  const [deliveryCharges,setDeliveryCharges] = useState(0);
  const calcTotPrice = ()=>{
      let p = 0;
      let d = 0;
      cartItems.map((item)=>{
        p += item.price.mrp;
        d += item.price.mrp - item.price.cost;
    })  
    setPrice(p);
    setDiscount(d);
    setDeliveryCharges(40);
  }
  //could write a function if user has some premium access or some special offer
  //then no delivery charges

  useEffect(()=>{
    calcTotPrice();
  },[cartItems])
  return (
    <div>
      <div className='header'>
          <p>PRICE DETAILS</p>
      </div>
      <div className='Container'>
          <p className='price'>Price ({cartItems?.length}) item
            <span>₹{price}</span>
          </p>
          <p className='price'>Discount
            <span className='green'>- ₹{discount}</span>
          </p>
          <p className='price'>Delivery Charges
            <span className='red'>+ ₹{deliveryCharges}</span>
          </p>
          <h3 className='totAmount price'>Total Amount
            <span>₹{price-discount + deliveryCharges}</span>
          </h3> 
          <p style={{fontSize:"0.75rem",marginTop:0,color:"green"}}>(You will save ₹{discount-deliveryCharges} on this order)</p>
      </div>
    </div>
  )
}

export default TotalView
