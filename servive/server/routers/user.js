const express=require('express');
const router=express.Router()

const products=require('../controllers/product')

router.get('/',products.data);
router.post('/signup',products.signup)

module.exports =router;
