import { useState } from 'react';
import './Form.css';
import Input from '../input/Input.jsx';
import DropDownMenu from '../dropdown/Dropdown.jsx';
import Button from '../button/Button.jsx';

function Form(props) {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    const [newTeam, setNewTeam] = useState('');
    const [color, setColor] = useState('')

    const {registerMember, createTeam} = props;

    // Event handler for new member 
    const handleClick = (e) => {
        e.preventDefault();
        
        const data = {
            name: name,
            position: position,
            photo: photo, 
            team: team
        };

        registerMember(data);
    };

    // Event handler for new team
    const handleNewTeam = (e) => {
        e.preventDefault();
        createTeam({team: newTeam, accentColor: color});
    }

    return (
        <section className='form-container'>
            <form className='form' id='member-form' onSubmit={handleClick}>
                <h2 className='form__header title'>Fill the form to create a new collaborator card.</h2>
                <Input 
                    title='Name' 
                    placeholder='Introduce name' 
                    value={name}
                    setValue={setName}
                    required 
                />
                <Input 
                    title='Position' 
                    placeholder='Introduce position' 
                    value={position}
                    setValue={setPosition}
                    required 
                />
                <Input 
                    title='Photo' 
                    placeholder='Introduce photo link' 
                    value={photo}
                    setValue={setPhoto}
                    required 
                />
                <DropDownMenu 
                    title='Team' 
                    teams={props.teams}
                    value={team}
                    setValue={setTeam}
                />
                <Button text='Create' />
            </form>

            <form className='form' id='team-form' onSubmit={handleNewTeam}>
                <h2 className='form__header title'>Fill the form to create a new team.</h2>
                <Input 
                    title='Team' 
                    placeholder='Introduce team name' 
                    value={newTeam}
                    setValue={setNewTeam}
                    required 
                />
                <Input 
                    title='Color' 
                    placeholder='Introduce team color in Hex value' 
                    value={color}
                    setValue={setColor}
                    type='color'
                    required 
                />

                <Button text='New Team' />
            </form>
        </section>
    );
};

export default Form;