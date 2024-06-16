const express=require('express');
const router=express.Router;

const products=require('../controllers/product')

router.use('/',products.products)