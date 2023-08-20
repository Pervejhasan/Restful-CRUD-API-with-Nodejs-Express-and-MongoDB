const Product = require('../model/productModels');
const asyncHandler = require('express-async-handler') 
// create data
const createProducts=asyncHandler( async(req,res)=>{
    try {
       const product=await Product.create(req.body)
       res.status(200).json(product)
    } catch (err) {
        res.status(500)
        throw new Error(err.message)
    }
       })

    //    get all products

    const getProducts=asyncHandler(async(req,res)=>{
        try {
          const products=await Product.find({});
          res.status(200).json(products)
        } catch (err) {
            res.status(500)
      throw new Error(err.message)
        }
        })
//GET single Product by id
const getProduct=asyncHandler(async (req,res)=>{
    try {
        // console.log(typeof req.params)
        const{id}=req.params;
        const product=await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500)
      throw new Error(err.message)
    }
    })
     //Update product

    const updateProduct=asyncHandler(async (req,res)=>{
        try {
        const {id}=req.params;
        const product= await Product.findByIdAndUpdate(id, req.body)
            if(!product){
                res.status(404)
                throw new Error(`cannot find any product with id ${id}`)
            }
            const updatedProduct=await Product.findById(id)
            res.status(200).json(updatedProduct)
        } catch (err) {
            res.status(500)
            throw new Error(err.message)
        }
        }
    )

    // DELETE product

const deleteProduct=asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id) 
    if(!product){
        res.status(404)
        throw new Error(`cannot find any product with id ${id}`)
    }
    res.status(200).json(product)
    
    } catch (err) {
        res.status(500)
        throw new Error(err.message)
    }
    }
)

    module.exports={
            createProducts,
            getProducts,
            getProduct,
            updateProduct,
            deleteProduct
        }