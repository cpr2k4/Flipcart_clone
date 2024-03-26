import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import "../../style/HomeStyle.css"
import {Button} from '@mui/material'
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1441 },
    items: 7
  },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 960, min: 550 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 550, min: 300 },
      items: 1
    }
};
//products slider
const Slide = ({products,title}) => {
  return (
    <div style={{backgroundColor:"white",padding:"1rem",marginBottom:"2rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p className="productsCrouselHead">{title}</p>
            <Button variant="contained" >View All</Button>
        </div>
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        centerMode={true} >
            {
                products.map((product,idx)=>(
                  <Link to={`/products/${product.id}`} key={idx} style={{textDecoration:"none",color:"inherit"}}>
                    <div className="card">
                        <img src={product.url} alt="product_image" height={120}/>
                        <div>
                            <p>{product.title.shortTitle}</p>
                            <p style={{color:"green"}}>{product.discount}</p>
                            <p>{product.tagline}</p>
                        </div>
                    </div>
                  </Link>
                ))
            }
        </Carousel>
    </div>
  )
}

export default Slide
