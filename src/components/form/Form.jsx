import './Form.css';
import TextInput from '../text-input/Text-input.jsx';

function Form() {
    return (
        <>
            <section className='form-container'>
                <form className='form' action="">
                    <h2 className='form__header title'>Fill the form to create a new collaborator card.</h2>
                    <TextInput />
                    <TextInput />
                    <TextInput />
                </form>
            </section>
        </>
    );
};

export default Form;