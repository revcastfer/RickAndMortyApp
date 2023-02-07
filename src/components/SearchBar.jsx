import styled from "styled-components"

const Bar=styled.div`
display:inline;


`

const Imput=styled.input`
height:25px;
border-radius:25px;
background-color:white;
opacity:0.5;
border:none;
font-size:15px

`

const Agre=styled.button`
height:25px;
width:95px;
border-radius:25px;
background-color:orange;
border:none;
color:white
`

export default function SearchBar(props){

function handleclick (id){
props.onSearch(id);
let target=document.getElementById("Search");
target.value="";
target.focus() };


   return (
      <Bar>
      <Imput type='search' id='Search' />
      <Agre onClick= {()=>{handleclick(document.getElementById("Search").value)}} >Agregar</Agre> 

      </Bar>
   )
}
