import SearchBar from './SearchBar.jsx'
import styled from "styled-components"
import logo from '../images/logo.png'

import { Outlet,NavLink,useLocation} from "react-router-dom"

let Navbar={
display:"flex",
position:"relative",
justifyContent:"flexAround",


}

const Options=styled.div`
display:flex;
justify-content: space-around;
align-items:flex-start;
`
let imagen={width:"40vh"}


export default function Nav(props){
	let location=useLocation().pathname;
	console.log(location);
if(location!=="/") {

return(
<div>

<div style={Navbar}>
<img src={logo} style={imagen} />
<SearchBar onSearch={props.onSearch}/>
</div>

<Options>
<NavLink to="/About">About</NavLink>
<NavLink to="/Home">Home</NavLink>
</Options>

<hr />
<Outlet/>
</div>)}






}