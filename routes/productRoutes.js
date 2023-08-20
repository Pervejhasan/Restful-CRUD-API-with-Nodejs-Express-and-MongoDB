
const express =require('express');
 const router=express.Router();
 const Product = require('../model/productModels');
const {
    createProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct}=require('../controllers/productController')

   // Create data 
  router.post('/',createProducts).get('/',  getProducts)
   //GET product
  //router.get('/',  getProducts)
   
   //GET single product by id
  router.get('/:id',getProduct).put('/:id',updateProduct ).delete(':id', deleteProduct);
   
   //Update or edit data
//router.put('/:id',updateProduct )
   //DELETE product
//router.delete(':id', deleteProduct)

   //export all router out of this file
   module.exports=router;