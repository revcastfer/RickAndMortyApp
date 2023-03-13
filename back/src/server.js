const express=require("express");
const server=express();
const router=require("./routes/index.js");

server.use(express.json());


server.use('/',function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next()
});



server.use("/",router);






server.listen(3001,() => {
   console.log('Server raised in port 3001')})