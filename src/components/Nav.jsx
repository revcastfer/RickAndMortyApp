import SearchBar from './SearchBar.jsx'
import styled from "styled-components"
import {Outlet} from 'react-router-dom'
import { NavLink } from "react-router-dom"

const Navbar=styled.div`
position:relative;
padding:25px;


`





export default function Nav(props){

return(
<Navbar> 
<SearchBar onSearch={props.onSearch}/>
<NavLink to="/About">About</NavLink>
<NavLink to="/Home">Home</NavLink>

<hr />
<Outlet/>
</Navbar>
)}