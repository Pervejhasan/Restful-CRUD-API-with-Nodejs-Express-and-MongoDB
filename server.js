const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors = require('cors');
require('dotenv').config();
const port=process.env.PORT ||3000;
const errorMiddleware=require('./middleware/errorMiddleware')
// const router=express.Router()
const productRoute=require('./routes/productRoutes')
// const FRONTEND=process.env.FRONTEND;


const corsOptions = {
    // origin:FRONTEND,
    origin:'http://localhost:5173',
   
  }
app.use(cors(corsOptions))
app.use(errorMiddleware);
// json middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
const MONGO_URL=process.env.MONGO_URL;

app.use('/api/products',productRoute);
app.get('/',(req,res)=>{
// throw new Error("Fake Error");
res.send('Hello NODE API')
})


// app.use(cors());
//allow access all domain app.use(cors()) or app.use(cors(*))
//allow specific domain access

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




