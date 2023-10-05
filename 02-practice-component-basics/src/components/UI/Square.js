import './Square.css';

const Square = (props) => {
    return <li className='square'>{props.children}</li>;
}

export default Square;