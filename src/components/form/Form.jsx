import './Form.css';
import TextInput from '../text-input/Text-input.jsx';
import DropDownMenu from '../dropdown/Dropdown.jsx';
import Button from '../button/Button.jsx';

function Form() {

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <section className='form-container'>
            <form className='form' onSubmit={handleClick}>
                <h2 className='form__header title'>Fill the form to create a new collaborator card.</h2>
                <TextInput title='Name' placeholder='Introduce name' required />
                <TextInput title='Position' placeholder='Introduce position' required />
                <TextInput title='Photo' placeholder='Introduce photo link' required />
                <DropDownMenu title='Team' />
                <Button text='Create' />
            </form>
        </section>
    );
};

export default Form;