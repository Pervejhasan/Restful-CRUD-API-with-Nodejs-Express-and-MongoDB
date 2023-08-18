const express=require('express')
const mongoose=require('mongoose')
const app=express();
const port=process.env.PORT ||3000;

//routes
app.get('/',(req,res)=>{
    res.send("Hello Node API");
})
app.get('/blog',(req,res)=>{
    res.send("Hello Blog ");
})

mongoose.
connect(`mongodb+srv://admin:1911512441@nodeapi.69ubeik.mongodb.net/Node-API?retryWrites=true&w=majority`)
.then(()=>{
    console.log("connected to mongodb")
})
.catch((err)=>{
console.log(err);
})


app.listen(port,()=>{
    console.log(`application listening port ${port} and running http://localhost:${port}`)
})

