import './Concepts.css';
import Concept from './Concept';

const Concepts = (props) => {
  return (
    <ul id="concepts">
      <Concept concept = {props.items[0]}/>
      <Concept concept = {props.items[1]}/>
      <Concept concept = {props.items[2]}/>
    </ul>
  );
};

export default Concepts;
