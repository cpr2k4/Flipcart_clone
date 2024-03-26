import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async(data)=>{
    try{
        let response = await axios.post(`${URL}/signup`,data);
        return response;
    }
    catch(err){
        console.log(err);
    }
}

export const authenticateLogin = async(data)=>{
    try{
        let response = await axios.post(`${URL}/login`,data);
        return response;
    }
    catch(err){
        return  err.response;
        console.error("Error in login in api.js: ", err.response.data.message)
    }
}

export const payUsingPaytm = (data)=>{
    try{
        let response = axios.post(`${URL}/payment`,data);
        return response;
    }
    catch(err){
        console.log("Error while calling payment api...");
    }
}