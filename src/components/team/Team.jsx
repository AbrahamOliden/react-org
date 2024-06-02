import Member  from '../member/Member.jsx';
import './Team.css';

function Team(props) {

    const {team, mainColor, accentColor} = props.data;
    const {members, deleteMember} = props;

    return (
        <>
        {
            members.length > 0 &&
                <section className='team' style={{backgroundColor: mainColor}} >
                    <div className='team__header' role='none' >
                        <h3 className='header__title title' style={{borderColor: accentColor}} >{team}</h3>
                        <input 
                            type='color'
                            value={accentColor}
                            className='header__color'
                        />
                    </div>
                    
                    <ul className="collaborators">
                        {
                            members.map( (member, index) => <Member 
                                data={member} 
                                key={index} 
                                theme={accentColor}
                                deleteMember={deleteMember}
                                /> )
                        }
                    </ul>
                </section>
        }
        </>

    );
};

export default Team