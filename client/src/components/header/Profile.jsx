import { useState,useContext } from 'react';
import {AccountCircle,Logout} from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DataContext } from '../../context/DataProvider';
import "../../style/HeaderStyle.css";

const Profile = () => {
    let [open,setOpen] = useState(false);
    let {account,setAccount} = useContext(DataContext);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose= () => {
        setOpen(false);
    };
    const logoutUser = () =>{
        setAccount("");
        setOpen(false);
    }
    return (
    <>   
        <div onClick={handleClick} className='profile'>
            <AccountCircle/> 
            &nbsp;
            <p>{account}</p>
        </div>
        <Menu
            id="basic-menu"
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem onClick={logoutUser}><Logout color='primary'/>&nbsp;Logout</MenuItem>
        </Menu>
    </>  
  )
}

export default Profile
