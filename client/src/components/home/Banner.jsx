import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {bannerData} from "/src/constants/data.js";
import "../../style/HomeStyle.css"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Banner = () => {
  return (
    <>
        <Carousel responsive={responsive} 
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        transitionDuration={500}
        itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map((item,idx)=>(
                    <div key={idx}>
                        <img src={item.url} alt="image" className='bannerImg'/>
                    </div>
                ))
            }
        </Carousel>
    </>
  )
}

export default Banner
