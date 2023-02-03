import  {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import styled from "styled-components"


const MarcoDetail=styled.div`
display:flex
`


export default function Detail(){

	const detailId=useParams();
	
	let [character,setCharacter]=useState([]);

	useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId.detailId}`)
    .then((response) => {return response.json()})
    .then((char) => {
      if (char.name) {
      	
        setCharacter(char);
        console.log(character)
              } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese IDxxx");
    });
   ;
}, [detailId]);


return(
<MarcoDetail>
	<div>
		<h2>{character.name}</h2>
		<h2>{character.status}</h2>
		<h2>{character.specie}</h2>
		<h2>{character.Gender}</h2>
		<h2>{character.origin}</h2>
	</div>
	
	<div>
		<h2>{character.imag}</h2>
	</div>
	
</MarcoDetail>


	)

}