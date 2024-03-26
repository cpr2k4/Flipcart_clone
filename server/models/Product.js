import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id : {
        type: String,
        required:true,
        unique: true
    },
    url : String,
    detailUrl : String,
    title:{
        shortTitle:String,
        longTitle:String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    quantity: Number,
    description: String,
    discount: String, 
    tagline: String
})

const Product = mongoose.model("Product",productSchema);

export default Product;