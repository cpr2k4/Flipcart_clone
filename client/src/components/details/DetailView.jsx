import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import "../../style/Product/productDetails.css";
import {Grid} from '@mui/material';
import ProductDetail from './ProductDetail';

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (!product || id !== product.id) {
      dispatch(getProductDetails(id));
    }
     // Calculate 5% of the page height
  const PercentOfPageHeight = 0.01 * document.documentElement.scrollHeight;
    
    // Scroll to the top of the page
    window.scrollTo(0, PercentOfPageHeight);
  }, [dispatch,product,id]);

  return (
    <div className='component'>
      {
        product && Object.keys(product).length &&
        <Grid container className='container'>
            <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={12} className='rightContainer'>
            <ProductDetail product={product}/>
        </Grid> 
        </Grid>
      }
    </div>
  );
};

export default DetailView;