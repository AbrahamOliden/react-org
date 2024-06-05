import './Text-input.css';

function TextInput(props) {

    const {type = 'text'} = props;

    const handleChange = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <div className='input-container' role='none'>
            <label htmlFor={props.title} className='input-container__label'>
                {props.title}
            </label>
            <input 
                className='input-container__input' 
                type={type} 
                value={props.value}
                onChange={handleChange}
                placeholder={props.placeholder} 
                name={props.title} 
                id={props.title} 
                required={props.required} 
            />
        </div>
    );
};

export default TextInput;