import './Member.css'
import { IoIosCloseCircle } from 'react-icons/io';

function Member(props) {

    const {name, position, photo, team, id} = props.data
    const {theme, deleteMember} = props
    
    const altText = `Photo of ${name}`;

    return (
        <>
        <li className='member-card' >
            <IoIosCloseCircle className='member-card__delete' onClick={ () => deleteMember(id)} />
            <div className='team-background' style={{ backgroundColor: theme}} role='none'></div>
            <div className='general-background' role='none'></div>
            <div className='member-info' >
                <img src={photo} className='member-info__photo' alt={altText} ></img>
                <h4 className='member-info__name' >{name}</h4>
                <p className='member-info__position' >{position}</p>
            </div>
        </li>
        
        </>
    )
};

export default Member;