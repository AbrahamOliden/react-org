import './Member.css'

function Member(props) {

    const {name, position, photo, team} = props.data
    const theme = {
        backgroundColor: props.theme
    };

    return (
        <li className='member-card' >
            <div className='team-background' style={theme} role='none'></div>
            <div className='general-background' role='none'></div>
            <div className='info' >
                <img src={photo} className='info__photo' alt={name} ></img>
                <h4>{name}</h4>
                <p>{position}</p>
            </div>
        </li>
    )
};

export default Member;