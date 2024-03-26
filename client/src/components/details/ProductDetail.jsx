import React from 'react'
import {LocalOffer} from '@mui/icons-material';
import {Table,TableBody,TableCell,TableRow} from '@mui/material';
import "../../style/Product/productDetails.css";

const ProductDetail = ({product}) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const fassuredUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const deliveryDate = new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <>
            <p style={{fontSize:"1.25rem",marginBottom:"0.25rem"}}>{product && product.title.longTitle}</p>
            <p style={{marginTop:"5px",color:"#878787",fontSize:"14px",display:"flex",alignItems:"center"}}>
            <span style={{margin:"0 0.5rem"}}><img src="/Rating.png" alt="rating_img" width={50}/></span>
              <span style={{fontWeight:"600"}}>8 ratings & 1 review</span>
              <span><img src={fassuredUrl} alt="fassured_img" style={{marginLeft:"20px",width:77}}/></span>
            </p>
            <p style={{fontSize:"1.1rem",color:"green"}}>Special Price</p>
            <p>
              <span style={{fontSize:28}}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
              <span style={{color:"#878787"}}><strike>{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
              <span style={{color:"#388E3C"}}>{product.price.discount} off</span>
            </p>
        <p style={{fontSize:"1.1rem"}}><b>Available offers</b></p>
        <div className='staticContent'>
            <p><LocalOffer className='badge'/> <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank CardT&C</p>
            <p><LocalOffer className='badge'/><b>Partner Offer </b> Flat 1% Instant discount up to ₹ 1,000 on purchase of Flipkart Digital Gift Cards</p>
            <p><LocalOffer className='badge'/><b>Partner Offer </b>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</p>
            <p><LocalOffer className='badge'/><b>Special Price </b>Get extra 2% off (price inclusive of cashback/coupon)</p>
            <Table>
                <TableBody>
                    <TableRow >
                        <TableCell className='grey'>Delivery</TableCell>
                        <TableCell>Delivery by <b>{deliveryDate.toDateString()}</b>  | <em>₹40</em></TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell className='grey'>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell className='grey'>Seller</TableCell>
                        <TableCell className='tableRowContent'>
                            <p style={{color:"#2196F3"}}>SuperComNet</p>
                            <p>GST invoice available</p>
                            <p>View more sellers starting from ₹166</p>
                        </TableCell>
                    </TableRow >
                    <TableRow >
                        <TableCell colSpan={2}>
                            <img className="tableImg" src={adURL} alt="ad_image" width={400} />
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell className='grey'>Description</TableCell>
                        <TableCell>
                            {product.description}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </>
  )
}

export default ProductDetail
