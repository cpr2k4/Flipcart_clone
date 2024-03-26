import express from "express";
const router = express.Router();
import {handleSignUp,handleLogin} from '../controller/user-controller.js';
import { getProducts,getProductDetails} from "../controller/products_controller.js";
import { addPaymentGateway } from "../controller/payment-controller.js";

router.post("/signup",handleSignUp);
router.post("/login",handleLogin);

router.get("/products",getProducts);
router.get("/products/:id",getProductDetails);

router.post("/payment",addPaymentGateway);


export default router;