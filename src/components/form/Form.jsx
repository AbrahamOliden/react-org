import { useState } from 'react';
import './Form.css';
import TextInput from '../text-input/Text-input.jsx';
import DropDownMenu from '../dropdown/Dropdown.jsx';
import Button from '../button/Button.jsx';

function Form() {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <section className='form-container'>
            <form className='form' onSubmit={handleClick}>
                <h2 className='form__header title'>Fill the form to create a new collaborator card.</h2>
                <TextInput 
                    title='Name' 
                    placeholder='Introduce name' 
                    value={name}
                    setValue={setName}
                    required 
                />
                <TextInput 
                    title='Position' 
                    placeholder='Introduce position' 
                    value={position}
                    setValue={setPosition}
                    required 
                />
                <TextInput 
                    title='Photo' 
                    placeholder='Introduce photo link' 
                    value={photo}
                    setValue={setPhoto}
                    required 
                />
                <DropDownMenu 
                    title='Team' 
                    value={team}
                    setValue={setTeam}
                />
                <Button text='Create' />
            </form>
        </section>
    );
};

export default Form;