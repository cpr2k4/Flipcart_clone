import React from 'react';
import { useState,useContext} from 'react';
import { Button,Box} from '@mui/material';
import { AccountCircle,Storefront,ShoppingCart,MoreVert} from '@mui/icons-material';
import { styled } from '@mui/system';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import "../../style/homeStyle.css"
import { useNavigate } from 'react-router-dom';

let ButtonsBar = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-around",
    alignItems: "center",
    fontSize:"1.125rem",
    marginLeft:"5rem",
    width:"40vw",
    '&>div':{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        flex: "1"
    },
    '&>button':{
        textTransform:"inherit",
        fontSize:"1.1rem"
    }
}));

const CustomButtons = () => {
    let [open, setOpen] = useState(false);
    let {account} = useContext(DataContext);
    const navigate = useNavigate();
    let handleOpen = ()=>{
        setOpen(true);
    }
    let handleClose = ()=>{
        setOpen(false);
    }
  return (
    <ButtonsBar className='customButtonsStyle'>
        {
            account!==""?<Profile/>:<Button onClick={handleOpen} style={{backgroundColor:"orange",color:"white"}} variant='contained' size="small" color="info" startIcon={<AccountCircle/>}>Login</Button>
        }
        <div style={{margin:0}} onClick={()=>navigate("/cart")}>
            <ShoppingCart />
            <p>Cart</p>
        </div>
        <div>
            <Storefront/>
            &nbsp;
            <span>Become a seller</span>
        </div>
        <div style={{width:"1rem"}}>
            <MoreVert/>
        </div>
        <LoginDialog close={handleClose} open={open}/>
    </ButtonsBar>
  )
}

export default CustomButtons
