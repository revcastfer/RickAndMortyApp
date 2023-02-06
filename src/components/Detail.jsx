import  {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import styled from "styled-components"
import { NavLink } from "react-router-dom"


const MarcoDetail=styled.div`
display:flex;
justify-content:space-around
`


export default function Detail(){

	const detailId=useParams();
	
	const [character,setCharacter]=useState({name:"",status:"",species:"",gender:"",origin:"",imag:""});

	useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId.detailId}`)
    .then((response) => response.json())
    .then((char) => {

      if (char.name) {
      	console.log(char);
        setCharacter({name:char.name,
        	            status:char.status,
        	            species:char.species,
        	            gender:char.gender,
        	            origin:char.origin.name,
        	            imag:char.image });

      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
  console.log(character)
}, [detailId]);

return(
<MarcoDetail>
<div>
		<h2>nombre: {character.name}</h2>
		<h2>status: {character.status}</h2>
		<h2>especie: {character.species}</h2>
		<h2>genero: {character.gender}</h2>
		<h2>origen: {character.origin}</h2>
	</div>
	
	<div>
	<NavLink to="/Home"> <button>back to Home</button></NavLink>
		<img src={character.imag}/>
	</div>

</MarcoDetail>


	)

}