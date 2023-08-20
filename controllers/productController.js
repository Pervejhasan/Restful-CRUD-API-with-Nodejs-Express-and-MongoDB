const Product = require('../model/productModels');

// create data
const createProducts= async(req,res)=>{
    try {
       const product=await Product.create(req.body)
       res.status(200).json(product)
    } catch (error) {
       console.log(error.message);
       res.status(500).json({message:error.message})
    }
       }

    //    get all products

    const getProducts=async(req,res)=>{
        try {
          const products=await Product.find({});
          res.status(200).json(products)
        } catch (err) {
            res.status(500).json({message:err.message})
        }
        }
//GET single Product by id
const getProduct=async (req,res)=>{
    try {
        // console.log(typeof req.params)
        const{id}=req.params;
        const product=await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
    }
     //Update product

    const updateProduct=async (req,res)=>{
        try {
        const {id}=req.params;
        const product= await Product.findByIdAndUpdate(id, req.body)
            if(!product){
                return res.status(404).json({message:`cannot find any product with id ${id} `})
            }
            const updatedProduct=await Product.findById(id)
          res.status(200).json(updatedProduct)
        } catch (err) {
            res.status(500).json({message:err.message})
        }
        }
    

        // DELETE product

const deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id) 
    if(!product){
        return res.status(404).json({message:`cannot find any product with id ${id}`})
    }
    res.status(200).json(product)
    
    } catch (error) {
        res.status(404).json({message:err.message})
    }
    }

    module.exports={
            createProducts,
            getProducts,
            getProduct,
            updateProduct,
            deleteProduct
        }