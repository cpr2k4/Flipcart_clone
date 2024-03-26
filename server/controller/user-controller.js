import User from "../models/User.js";

export const handleSignUp = async(req,res)=>{
    try{
        let usernameExists = await User.findOne({username: req.body.username});
        if(usernameExists){
            return res.status(401).json({message:"User already exists!"});
        }
        else{
            let data = req.body;
            let newUser = new User(data);
            await newUser.save();
            return res.status(200).send("Successfully Signed Up");
        }   
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Problem in saving user data...");  
    }
}

export const handleLogin = async(req,res)=>{
    try{
        let username = req.body.username;
        let password = req.body.password;
        let user = await User.findOne({username:username,password:password});
        if(user){
            return res.status(200).json({data:user.fname});
        }
        else{
            return res.status(401).json({message:"Invalid Credentials"});   
        }
    }
    catch(err){
        res.status(500).json({message:"Problem in login user...."});
        console.log("Problem in login user....",err.message);
    }
}