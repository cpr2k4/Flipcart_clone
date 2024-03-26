import { useState } from 'react';
import {AppBar,Toolbar,Drawer,List,ListItem} from '@mui/material'
import "../../style/HeaderStyle.css";
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { getProducts } from '../../redux/actions/productActions';
import zIndex from '@mui/material/styles/zIndex';

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';    
    const [open,setOpen] = useState(false); 
    const handleOpen = ()=>{
        setOpen(true);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const list = ()=>(
        <div>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </div>
    )
    return (
        <>
        <AppBar>
            <Toolbar className='navStyle'>
                <IconButton onClick={handleOpen} sx={{marginLeft:"0.5rem",color:"white"}} className='hamBurger'>
                    <MenuIcon />
                </IconButton>

                <Drawer open={open} onClose={handleClose} style={{width:"150px"}}>
                    {list()}
                </Drawer>

                <Link to={`/`} style={{textDecoration:"none",color:"inherit"}}> 
                    <div className='logo'>
                        <img src={logoURL} alt="logo" width="90"/>
                        <span style={{fontSize:"0.8rem",marginRight:"0.25rem"}}>
                            <i>Explore <span style={{color:"gold"}}>Plus</span></i> <img src={subURL} alt="sublogo" width="10"/>
                        </span>
                    </div>
                </Link>

                <Search/>

                <div className='customButtonsNavbar'>
                    <CustomButtons/>
                </div>

            </Toolbar>
        </AppBar>
        </  >
    )
}

export default Header
