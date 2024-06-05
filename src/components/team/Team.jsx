import Member  from '../member/Member.jsx';
import hexToRgba from 'hex-to-rgba';
import './Team.css';

function Team(props) {

    const {team, mainColor, accentColor, id} = props.data;
    const {members, deleteMember, updateColor} = props;
    const newMainColor = {
        backgroundColor: hexToRgba(accentColor, 0.3)
    }

    return (
        <>
        {
            members.length > 0 &&
                <section className='team' style={newMainColor} >
                    <div className='team__header' role='none' >
                        <h3 className='header__title title' style={{borderColor: accentColor}} >{team}</h3>
                        <input 
                            type='color'
                            value={accentColor}
                            onChange={
                                (e) => updateColor(id, e.target.value)
                            }
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