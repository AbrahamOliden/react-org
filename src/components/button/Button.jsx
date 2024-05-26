import './Button.css'

function Button(props) {
    return(
        <button className='create-button'>
            {props.text}
        </button>
    );
};

export default Button;