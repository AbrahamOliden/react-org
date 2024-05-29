import Member  from '../member/Member.jsx';
import './Team.css';

function Team(props) {

    const {team, mainColor, accentColor} = props.data;
    const {members} = props;

    return (
        <>
        {
            members.length > 0 &&
                <section className='team' style={{backgroundColor: mainColor}} >
                    <h3 className='team__header title' style={{borderColor: accentColor}} >{team}</h3>
                    <ul className="collaborators">
                        {
                            members.map( (member, index) => <Member data={member} key={index} /> )
                        }
                    </ul>
                </section>
        }
        </>

    );
};

export default Team