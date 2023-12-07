import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return ( <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
  }}>
      {characters.map((elem)=> (<Card 
            key = {elem.id}  
            id={elem.id}
            name={elem.name}
            status={elem.status}
            species={elem.species}
            gender={elem.gender}
            // origin={elem.origin.name}
            image={elem.image}
            onClose={onClose}
            />))}
   </div> )
}
