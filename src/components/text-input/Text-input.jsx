import './Text-input.css';

function TextInput(props) {
    return (
        <div className='input-container' role='none'>
            <label className='input-container__label'>{props.title}</label>
            <input className='input-container__input' type="text" placeholder={props.placeholder} />
        </div>
    );
};

export default TextInput;