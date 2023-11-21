export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h4>Status: {props.status}</h4>
         <h4>Species: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin} </h4>
         <img src={props.image} alt={props.name} />
      </div>
   );
}