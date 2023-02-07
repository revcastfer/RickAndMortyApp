import SearchBar from './SearchBar.jsx'
import styled from "styled-components"
import logo from '../images/logo.png'
import icono from '../images/icono.png'
import baner from '../images/baner.jpg'
import { Outlet,NavLink,useLocation} from "react-router-dom"

const linkkOptions=({isActive})=>{return{
color:isActive? "yellow":"orange",
fontWeight: isActive? "bold" : 'normal',
	textDecoration: isActive? "none" : 'underline',
	fontSize:'20px',}	
}

const Navbar=styled.div`
display:flex;
align-items:center;
justify-content: space-around;

`

const Options=styled.div`
display:flex;
position:relative;
justify-content:space-evenly;
align-items:flex-start;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );

border: 1px solid rgba( 255, 255, 255, 0.18 );
`

let imagen1={width:"50vh"};


export default function Nav(props){
	let location=useLocation().pathname;
	console.log(location);
if(location!=="/") {

return(
	<div>

<Navbar>

<img src={logo} style={imagen1} />

<SearchBar onSearch={props.onSearch}/>
</Navbar>


<Options>
<NavLink to="/About" style={linkkOptions} >About</NavLink>
<NavLink to="/Home" style={linkkOptions}>Home</NavLink>
</Options>



<hr />
<Outlet/>


</div>)}




}