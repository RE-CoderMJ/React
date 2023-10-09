import Square from '../UI/Square';

const Concept = (props) => {
    return (
      <Square>
        <img src={props.concept.image} alt={props.concept.alt} />
        <h2>{props.concept.title}</h2>
        <p>{props.concept.description}</p>
      </Square>
    );
}

export default Concept;