export default function validation(userdata){

let errors={username:"",password:""};

let regExpUser=/.[a-zA-Z0-9._-]+@\w+\.[a-zA-Z]+/;
let regExpPasword=/[0-9]+/;



if(!userdata.username){errors.username='debe llenar este campo'}else
if(!regExpUser.test(userdata.username)){errors.username='debe ser un correo electronico'}else
if(userdata.username.length>35){errors.username='debe tener menos de 35 caracteres'};

if(!regExpPasword.test(userdata.password)){errors.password='debe tener un numero como minimo'}else
if(!userdata.password.length>6 && userdata.password.length>10){errors.password='debe tener minimo entre 6 y 10 caracteres'};



return errors
}