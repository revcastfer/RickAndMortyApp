
import styled from "styled-components"
import Logo from "../images/logo.png"

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
	
return(
<Login>

<Ingreso>

     <img src={Logo}  width="250" />
	<input type="text" placeholder="usuario" style={inp}/>
	<input type="text" placeholder="contraseña" style={inp}/>
	<button style={{...inp,color:"yellow",backgroundColor:"#4CEC49",fontSize:"20px",fontWeight: "bold"}}>Ingresar</button>
</Ingreso>

</Login>
	)}