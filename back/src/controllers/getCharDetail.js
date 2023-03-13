const axios=require("axios");

let URL="https://rickandmortyapi.com/api/character/";

const getCharDetail=(req,res)=>{
const params=req.params;

axios(URL+params)
.then(response=>response.data)
.then(data=>{res.status(200)
.json({id:data.id,name:data.name,species:data.species,image:data.image,gender:data.gender,origin:data.origin})}    )
.catch( error=>res.status(500).json({message:error}) )

}







module.exports=getCharDetail