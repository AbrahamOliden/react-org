import './Text-input.css';

function TextInput(props) {
    return (
        <div className='input-container' role='none'>
            <label htmlFor={props.title} className='input-container__label'>{props.title}</label>
            <input className='input-container__input' type="text" placeholder={props.placeholder} name={props.title} id={props.title} required={props.required} />
        </div>
    );
};

export default TextInput;