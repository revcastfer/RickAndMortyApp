import Card from './Card';


const contenedor={display:"flex",justifyContent:"space-around",flexWrap:"wrap"};


export default function Cards(props) {
const { characters } = props;
 let temp=[];
console.log(props);
   function close(id){ 
      characters.map(  ele=>{ if(ele.id!==id){return temp.push(ele)} }  );
      props.close(temp)

       }




   return <div style={contenedor}>

     {characters.map(x=><Card 
         id={x.id}
         close={props.close}
          name={x.name}
          species={x.species}
          gender={x.gender}
          image={x.image}
          onClose={() => close(x.id)}      />)}
   </div>
}
