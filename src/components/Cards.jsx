import Card from './Card';
const contenedor={display:"flex",justifyContent:"space-around",flexWrap:"wrap"};

export default function Cards(props) {
const { characters } = props;
console.log(props.characters)
 let temp=[];

   function close(id){ 
      characters.map(  ele=>{ if(ele.id!==id){return temp.push(ele)} }  );
      props.close(temp)

       }

   return <div style={contenedor}>

     {characters.map(x=><Card 
         close={props.close}
          name={x.name}
          species={x.species}
          gender={x.gender}
          image={x.image}
          onClose={() => close(x.id)}      />)}
   </div>
}
