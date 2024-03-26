import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase,List,ListItem } from '@mui/material'; 
import styled from '@emotion/styled';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { LibraryAdd } from '@mui/icons-material';
import "../../style/HeaderStyle.css";  
import {Link} from 'react-router-dom';

const CustomSearch = styled(InputBase)`
  width:100%;
  padding:0.1rem 0.5rem;  
`
const Search = () => {
  const [text,setText] = useState("");
  const getText = (text)=>{
    setText(text);
  }
  const dispatch = useDispatch();
  const {products} = useSelector(state=> state.getProducts);
  useEffect(()=>{  
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
      <div className='searchContainer'>
      <CustomSearch value={text} onChange={(e)=>getText(e.target.value)} placeholder='Search for Products,Brands and More' startAdornment={<SearchIcon />}/>
      <div className='listWrapper'>
      {
        text && 
          <ul>
              {
                products
                .filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase()))
                .slice(0, 6)
                .map(product => {
                  const title = product.title.longTitle;
                  const index = title.toLowerCase().indexOf(text.toLowerCase());
                  const before = title.substring(0, index);
                  const match = title.substring(index, index + text.length);
                  const after = title.substring(index + text.length);
              
                  return (
                    <li key={product.id} style={{ listStyle: "none", margin: "1.5rem 0", paddingRight: "20px" }}>
                      <Link to={`/products/${product.id}`}
                        onClick={() => setText("")}
                        style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                        <img src={product.url} alt="product_img" width={40} style={{ marginRight: "1rem" }} />
                        <span>{before}<span style={{ backgroundColor: "yellow" }}>{match}</span>{after}</span>
                      </Link>
                    </li>
                  );
                })
              }
          </ul>
      }
      </div>
    </div>
    </>
  )
}

export default Search
