//File to handle sample data insertions into db
import Product from "./models/Product.js";
import {products} from "./constants/data.js";
import dotenv from 'dotenv'
import Connection from "./database/Connection.js";

dotenv.config();
const url = process.env.DB_URL;

const initData = async()=>{
    try{
        await Connection(url);
        await Product.insertMany(products);
        console.log("data inserted...");
    }   
    catch(err){
        console.log("Error in inserting data into database:- ",err);
    }
    finally{
        await Connection("close");
    }
}
//insert into mongodb
initData();


