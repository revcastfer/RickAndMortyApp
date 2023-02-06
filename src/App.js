import './App.css'
import Nav from './components/Nav.jsx'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
//import SearchBar from './components/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import styled from "styled-components"
import fondorick from "./images/wallpaperbetter.jpg"
import  {useState} from 'react';
import {Routes,Route} from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from'./components/Form.jsx'



const Fondo=styled.div`
 background:url(${fondorick});
 background-Size:cover;
 background-repeat:no-repeat;
 background-attachment:fixed;
 min-height:100vh
`


function App () {

  const [characters,setCharacters]=useState([]);
  

  function onSearch(character) {
  
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}


  return (
    <Fondo className='App' >
    <Nav onSearch={onSearch}/>
    


     <Routes>
       
         <Route path="/" element={<Form/>} /> 
       
        <Route path="Home" element={<Cards characters={characters} close={setCharacters}/>} />  

       <Route path="About" element={<About/>} />
       <Route path="detail/:detailId" element={<Detail/>}/>
        

      </Routes>



   
    </Fondo>
  )
}

export default App
