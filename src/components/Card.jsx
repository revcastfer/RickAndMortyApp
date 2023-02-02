import styled from "styled-components"


import Rickfont from '../Fonts/get_schwifty.ttf'


const Fondoarriba=styled.div`
background-color:black;
opacity:0.7;
height:44px ;
 width:100%;
 position:absolute;
 border-radius:20px 23px 0px 0px 
`
const Fondoabajo=styled.div`
background-color:black;
opacity:0.7;
height:44px ;
 width:100%;
 position:absolute;
 bottom:0px;
 border-radius:0px 0px 21px 21px
`

const Marco=styled.div`
color:orange;
position:relative;
height:300px;
width:300px;
border:5px solid orange;
border-radius:25px;
margin:15px;
font-size:17px;
font-weight:bold;
@font-face { 
  font-family:'Rickfont'; 
  src:local('Rickfont'),url(${Rickfont}) format('ttf'); 
}
`



const carta={
 borderRadius:"25px",
  height:"300px" ,
 width:"300px",}

const Button=styled.button`
position:absolute;
display:inline;
right:0px;
border-top-right-radius:21px;
font-size:32px;
 &:hover {
    background-color:red;
    color:white
  }
`


const Nombre=styled.div`
position:absolute;
display:inline;left:18px;
padding:8px
`
const Species=styled.div`
position:absolute;
display:inline;
bottom:0px;
left:25px;
padding:15px
`
const Gender=styled.div`
position:absolute;
display:inline;
bottom:0px;
right:35px;
padding:15px
`


export default function Card(props) {

   return (
      <Marco>
      <Fondoarriba/>
      <Fondoabajo/>
     
         <Button onClick={()=>props.onClose()} >X</Button>
         <Nombre>{props.name}</Nombre>
         
         <Species>{props.species}</Species>
         <Gender>{props.gender}</Gender>
         <img style={carta} src={props.image} alt="imagen" />
     
      </Marco>
   );
}
