const server=require("../server.js");
const getCharById=require("../controllers/getCharById.js");
const getCharDetail=require("../controllers/getCharDetail.js");
const favs=require("../utils/favs.js");
const express=require("express");
const router=express.Router();


router.get( "/rickandmorty/onsearch/:id",(req,res)=>{getCharById(req,res)});
router.get( "/rickandmorty/detail/:id", (req,res)=>{getCharDetail(req,res)});

router.post( "/rickandmorty/fav",(req,res)=>{
let character=req.body
favs.push(character);
res.status(200)
});


router.get("rickandmorty/fav",(req,res)=>{
res.status(200).json(favs)

});


router.delete("/rickandmorty/fav/:id",(req,res)=>{
let id=Number(req.params.id);

let newfavs=[];
favs.forEach(elemento=>{ if (elemento.id!=id){newfavs.push(elemento)}});
favs=newfavs;




});







module.exports=router