import './Team.css'

function Team(props) {

    const {team, mainColor, accentColor} = props.data;

    return (
        <section className='team' style={{backgroundColor: mainColor}} >
            <h3 className='team__header title' style={{borderColor: accentColor}} >{team}</h3>
            <div className="collaborators"></div>
        </section>
    );
};

export default Team