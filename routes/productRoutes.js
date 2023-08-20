
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
//   router.post('/',createProducts).get('/',  getProducts);
router.route('/').post(createProducts).get(getProducts);
   //GET product
  //router.get('/',  getProducts)
   
   //GET single product by id
  router.route('/:id').get(getProduct).put(updateProduct ).delete(deleteProduct);
   
   //Update or edit data
//router.put('/:id',updateProduct )
   //DELETE product
//router.delete(':id', deleteProduct)

   //export all router out of this file
   module.exports=router;