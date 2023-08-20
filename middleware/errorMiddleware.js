/*
  @ Middleware is a callback function,
   that can detect respond error request in your application,
   it's like a middleman desk detect everything.

   @In Express.js, middleware functions are functions
    that have access to the request (req),
     response (res), and the next middleware function
      in the application's request-response cycle. 
      They are used to perform tasks such as
       parsing request data, authentication, 
       logging, and more.
*/

const errorMiddleware=(err,req,res,next)=>{
const statusCode=res.statusCode?res.statusCode:500
res.status(statusCode)
// console.log("middleware",statusCode);
res.json({message:err.message, stack:process.env.NODE_ENV==="development"?err.stack:null})
}

module.exports=errorMiddleware;