const express=require('express')
const mongoose=require('mongoose')
const app=express();
const port=process.env.PORT ||3000;
const Product = require('./model/productModels');
// json middleware
app.use(express.json())

app.post ('/products', async(req,res)=>{
 try {
    const product=await Product.create(req.body)
    res.status(200).json(product)
    
 } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
 }
    })

app.get('/products',async(req,res)=>{
try {
  const products=await Product.find({});
  res.status(200).json(products)
} catch (err) {
    res.status(500).json({message:"err.message"})
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




