import './Member.css'
import { IoIosCloseCircle } from 'react-icons/io';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Member(props) {

    const {name, position, photo, team, id, favorite } = props.data
    const {theme, like, deleteMember} = props
    
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
                {
                    favorite
                        ? <AiFillHeart className='like like-true' onClick={() => like(id)} />
                        : <AiOutlineHeart className='like like-false' onClick={() => like(id)} />
                }
                
            </div>
        </li>
        
        </>
    )
};

export default Member;