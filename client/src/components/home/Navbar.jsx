import React from 'react'
import { navData } from '../../constants/data'
import "../../style/HomeStyle.css";
const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            {
                navData.map((item,idx)=>(
                    <div key={idx} className='item'>
                        <img src={item.url} alt="item_image" className='image'/>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Navbar
