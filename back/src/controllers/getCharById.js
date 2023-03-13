const axios=require("axios");

let URL="https://rickandmortyapi.com/api/character/";

const getCharById=(req,res)=>{
const {id}=req.params;
console.log(id);

axios(URL+id)
.then(response=>response.data)
.then(data=>{res.status(200)
    .json({id:data.id,name:data.name,species:data.species,image:data.image,gender:data.gender})}    )
.catch( error=>res.status(500).json({message:error}) )

}







module.exports=getCharById