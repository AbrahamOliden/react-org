import './Text-input.css';

function TextInput() {
    return (
        <div className='input-container' role='none'>
            <label className='input-container__label'>Label</label>
            <input className='input-container__input' type="text" placeholder='Introduce'/>
        </div>
    );
};

export default TextInput;