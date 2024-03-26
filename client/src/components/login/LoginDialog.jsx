import React, { useState,useContext } from 'react'
import {Dialog,TextField, Button} from '@mui/material';
import "../../style/login/loginStyle.css"
import {authenticateSignup,authenticateLogin} from "/src/service/api.js";
import {DataContext}  from '../../context/DataProvider.jsx';
let initImageData={
    signup:{
        view:"signup",
        firstPara:"Looks like you're new here!",
        secondPara:"Sign up with your mobile number to get started"
    },
    login:{
        view:"login",
        firstPara:"Login",
        secondPara:"Get access to your Orders, Wishlist and Recommendations"
    }
}
let initSignup = {
    fname:"",
    lname:"",
    username:"",
    password:"",
    email:"",
    phone:"",
}
let initLogin = {
    username:"",
    password:""
}

const LoginDialog = ({open,close}) => {
    let [account,toggleAccount] = useState(initImageData.login);
    let [signupData ,setSignupData] = useState(initSignup);
    let [loginData,setLoginData] = useState(initLogin)
    let [error,setError] = useState(false);

    let {setAccount} = useContext(DataContext);

    let handleClose = ()=>{
        close();
        toggleAccount(initImageData.login);
        setError(false);
    }
    let handleSignupChange = (e)=>{
        setSignupData((prevData)=>{
            return {...prevData,[e.target.name]: e.target.value};
        });
    }
    let handleSignUp = async(data)=>{
        let response = await authenticateSignup(data);
        if(!response) return;
        handleClose();
        setAccount(data.fname);
    }
    let handleLoginChange = (e)=>{   
        setLoginData((prevData)=>{
            return {...prevData,[e.target.name]:e.target.value};
        });
    }
    let handleLogin = async(data)=>{
        let response = await authenticateLogin(data);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data);
        }
        else{
            setError(true);
        }
    }
    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{sx:{maxWidth:"unset"}}}>
            <div style={{display:"flex",flexWrap:"wrap",height:"500px",width:"700px"}}>
                <div className='Image'>
                    <p>{account.firstPara}</p>
                    <p style={{fontSize:"1rem"}}>{account.secondPara}</p>
                </div>
                {
                    
                  account.view==="login"?
                    <div className='LoginDetails'>
                        <TextField variant="standard" onChange={(e)=>handleLoginChange(e)} name="username" label="Enter username" style={{width:"300px"}}/>
                        <TextField variant="standard" type='password' onChange={(e)=>handleLoginChange(e)} name="password" label="Enter password" style={{width:"300px"}}/>
                        {
                            error===true?<p style={{color:"red",fontSize:"0.85rem",alignSelf:"center"}}>Invalid username or password!</p>:null
                        }
                        <p className='terms'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                        <Button onClick={()=>handleLogin(loginData)} variant="standard" className='loginBtn'>Login</Button>
                        <Button className='centerAlign'>Request OTP</Button>
                        <p onClick={()=>toggleAccount(initImageData.signup)} style={{cursor:"pointer",position:"relative",bottom:"15px"}} className='centerAlign'>New to Flipkart? Create an account.</p>                
                    </div>
                :
                    <div className='LoginDetails'>
                        <TextField name="fname" onChange={(e)=>handleSignupChange(e)} variant="standard" label="Enter first name" style={{width:"300px"}}/>
                        <TextField name="lname" onChange={(e)=>handleSignupChange(e)} variant="standard" label="Enter last name" style={{width:"300px"}}/>
                        <TextField name="email" onChange={(e)=>handleSignupChange(e)} variant="standard" label="Enter email" style={{width:"300px"}}/>
                        <TextField name="username" onChange={(e)=>handleSignupChange(e)} variant="standard" label="Enter username" style={{width:"300px"}}/>
                        <TextField type='password' name="password" onChange={(e)=>handleSignupChange(e)} variant="standard" label="Enter password" style={{width:"300px"}}/>
                        <TextField name="phone" onChange={(e)=>handleSignupChange(e)}variant="standard" label="Enter phone" style={{width:"300px"}}/>

                        <p className='terms'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                        <Button onClick={()=>handleSignUp(signupData)} variant="standard" className='loginBtn'>Signup</Button>
                        <p className='centerAlign'>OR</p>
                    <p onClick={()=>toggleAccount(initImageData.login)} style={{cursor:"pointer",position:"relative",bottom:"15px"}} className='centerAlign'>Already have an account? Click here to login</p>
                    </div>     
                }
            </div>
        </Dialog>
  )
}

export default LoginDialog
