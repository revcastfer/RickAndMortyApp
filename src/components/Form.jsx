
import styled from "styled-components"
import Logo from "../images/logo.png"
import{useState} from 'react'
import validation from './validation.js'

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
min-width:30vw;
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

export default function Form(props){
 const [userData, setUserData] = useState({ username: '', password: '' });	
 const [errormsj, setErrors] = useState({ username: '', password: '' });

 


const msjError={
	color:"red",
	fontSize:"12px"};


 let handleInputChange=(e)=>{
 	let valor=e.target.value;
 	let campo=e.target.id;
 	 
 	

 	if(campo=='username'){
 	setUserData({...userData,username : valor});
 	setErrors({...errormsj,username: validation(userData).username});
}

 	if(campo=='password')	{
 	setUserData({...userData,password: valor});
 	
 	setErrors({...errormsj,password: validation(userData).password})} 	
 }


 let handleSubmit=(e)=>{

 	e.preventDefault();
 	props.loguin(userData);


 }
return(
<Login>

<Ingreso onSubmit={handleSubmit}>

     <img src={Logo}  width="250" />
     <div>
	<input id="username" type="text" placeholder="usuario" style={inp} onChange={handleInputChange}/>
	<label style={msjError}> {errormsj.username}</label>
    </div>

    <div>
	<input id="password" type="password" placeholder="contraseña" style={inp} onChange={handleInputChange} />
	<label style={msjError}> {errormsj.password}</label>
	</div>
	<button style={{...inp,color:"yellow",backgroundColor:"#4CEC49",fontSize:"20px",fontWeight: "bold"}}>Ingresar</button>
</Ingreso>

</Login>
	)}