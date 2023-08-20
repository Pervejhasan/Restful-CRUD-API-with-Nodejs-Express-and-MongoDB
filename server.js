const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config();
const port=process.env.PORT ||3000;
const productRoute=require('./routes/productRoutes')

// json middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
const MONGO_URL=process.env.MONGO_URL;

app.use('/api/products',productRoute);

/* =========> first we connect the application with database,then we run the application <============*/
// mongoose.set('strictQuery',false);
mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log("connected to mongodb")
    app.listen(port,()=>{
        console.log(`application listening PORT ${port} and running http://localhost:${port}`)
    })

})
.catch((err)=>{
console.log(err);
})




