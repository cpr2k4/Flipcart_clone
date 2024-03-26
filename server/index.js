import express from "express";
import Connection from "./database/Connection.js";
import dotenv from "dotenv"
import router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const PORT = 8000;

//cors
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);    
})


// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


//router
app.use("/",router);

//dotenv
dotenv.config();
const url = process.env.DB_URL;

//mongodb Connect
Connection(url);

app.get("/",(req,res)=>{
    res.send("Arnold is numero uno!");
})