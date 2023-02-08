
import styled from "styled-components"
import Logo from "../images/logo.png"
import{useState} from 'react'

const Login=styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
align-content: center;
align-items:center;
min-height: 100vh;
min-width:100vw;
`

const Ingreso=styled.form`
height:70vh;
width:30vw;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: orange;
border-radius:25px;
border: 6px solid #4CEC49
`

const inp={display:'block',width:"25vw",height:"5vh",borderRadius:"7px",
border: "1px solid #4CEC49",color:"",backgroundColor:"",fontSize:"",fontWeight: ""}

export default function Form(){
 const [userData, setUserData] = useState({ username: '', password: '' });	


const error={color:"red",fontSize:"12px"};


 let handleInputChange=(e)=>{
 	let valor=e.target.value;
 	let campo=e.target.id;
 	e.preventDefault(); 

 	if(campo=='username')	{
 	setUserData({...userData,username : valor})};

 	if(campo=='password')	{
 	setUserData({...userData,password: valor})};
 	console.log(userData)


 	
 }
return(
<Login>

<Ingreso>

     <img src={Logo}  width="250" />
     <div>
	<input id="username" type="text" placeholder="usuario" style={inp} onChange={handleInputChange}/>
	<span style={error} >verificar correo electronico</span>
    </div>

    <div>
	<input id="password" type="text" placeholder="contraseña" style={inp} onChange={handleInputChange} />
	<label style={error}>verificar datos</label>
	</div>
	<button style={{...inp,color:"yellow",backgroundColor:"#4CEC49",fontSize:"20px",fontWeight: "bold"}}>Ingresar</button>
</Ingreso>

</Login>
	)}