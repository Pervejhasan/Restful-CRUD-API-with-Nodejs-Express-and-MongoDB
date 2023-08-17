const express=require('express')

const app=express();
const port=process.env.PORT ||3000;

//routes
app.get('/',(req,res)=>{
    res.send("Hello Node API");
})

app.listen(port,()=>{
    console.log(`application listening port ${port} and running http://localhost:${port}`)
})