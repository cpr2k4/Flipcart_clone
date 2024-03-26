import Navbar from './Navbar'
import Banner from './Banner'
import "../../style/HomeStyle.css";
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import Slide from './Slide.jsx';
import Ad from './Ad';
import MidBanner from './MidBanner';

const Home = () => {

  const {products} = useSelector(state => state.getProducts);

  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  
  return (
    <>
      <Navbar/>
      <div className='paddingMe'>
        <Banner/>
      </div>
      <div className='paddingMe' style={{paddingTop:0}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div className='adSlide'>
            <Slide products={products} title="Deal of the day"/>
          </div>
          <Ad />
        </div>
        <MidBanner />
        <Slide products={products} title="Discounts for you"/>
        <Slide products={products} title="Suggesting items"/>
        <Slide products={products} title="Top Selection"/>
        <MidBanner />
        <Slide products={products} title="Recommended items"/>
      </div>
    </>
  )
}

export default Home
