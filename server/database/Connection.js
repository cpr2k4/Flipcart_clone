import mongoose from "mongoose"

const Connection = async(url)=>{
    try{
        if(url==='close'){
            await mongoose.connection.close();
        }
        else{
            await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Successfully connected to MongoDB...");
        }
    }
    catch(err){
        console.log("Error in connecting to the database:- ",err);
    }
}

export default Connection;