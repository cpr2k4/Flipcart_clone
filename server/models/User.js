import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:50
    },
    lname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:50
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique: true,
        trim:true,
        min:5,
        max:50
    },
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique: true,
        index:true, //indexing the field for faster search 
        min:5,
        max:50
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:5,
    },
    phone:{
        type:String,
        required:true,
        unique: true,
        trim:true,
        min:10,
        max:11
    }
})

const User = mongoose.model('User',userSchema);

export default User;