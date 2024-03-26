import Product from "../models/Product.js"

export const getProducts = async(req,res)=>{
    try{
        let products = await Product.find({});
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({message:"Unable to send products for crousel!"});
    }
}

export const getProductDetails = async(req,res)=>{
    try{
        let id = req.params.id;
        let product = await Product.findOne({id:id});
        return res.status(200).json(product);
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}