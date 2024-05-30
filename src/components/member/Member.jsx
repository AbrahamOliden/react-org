import './Member.css'

function Member(props) {

    const {name, position, photo, team} = props.data
    const theme = {
        backgroundColor: props.theme
    };
    const altText = `Photo of ${name}`;

    return (
        <li className='member-card' >
            <div className='team-background' style={theme} role='none'></div>
            <div className='general-background' role='none'></div>
            <div className='member-info' >
                <img src={photo} className='member-info__photo' alt={altText} ></img>
                <h4 className='member-info__name' >{name}</h4>
                <p className='member-info__position' >{position}</p>
            </div>
        </li>
    )
};

export default Member;