import Member  from '../member/Member.jsx';
import './Team.css';

function Team(props) {

    const {team, mainColor, accentColor} = props.data;

    return (
        <section className='team' style={{backgroundColor: mainColor}} >
            <h3 className='team__header title' style={{borderColor: accentColor}} >{team}</h3>
            <ul className="collaborators">
                <Member />
            </ul>
        </section>
    );
};

export default Team