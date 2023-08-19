const express=require('express')
const mongoose=require('mongoose')
const app=express();
const port=process.env.PORT ||3000;
const Product = require('./model/productModels');
// json middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// add data 
app.post ('/products', async(req,res)=>{
 try {
    const product=await Product.create(req.body)
    res.status(200).json(product)
 } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
 }
    })

//read data
app.get('/products',async(req,res)=>{
try {
  const products=await Product.find({});
  res.status(200).json(products)
} catch (err) {
    res.status(500).json({message:err.message})
}
})

//read single data by id
app.get('/products/:id',async (req,res)=>{
try {
    // console.log(typeof req.params)
    const{id}=req.params;
    const product=await Product.findById(id)
    res.status(200).json(product)
} catch (err) {
    res.status(500).json({message:err.message})
}
})

//update or edit data

app.put('/products/:id', async (req,res)=>{
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
})
//delete data
app.delete('/products/:id', async(req,res)=>{
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

})



/* =========> first we connect the application with database,then we run the application <============*/
// mongoose.set('strictQuery',false);
mongoose.
connect(`mongodb+srv://admin:1911512441@nodeapi.69ubeik.mongodb.net/Node-API?retryWrites=true&w=majority`)
.then(()=>{
    console.log("connected to mongodb")
    app.listen(port,()=>{
        console.log(`application listening port ${port} and running http://localhost:${port}`)
    })

})
.catch((err)=>{
console.log(err);
})




