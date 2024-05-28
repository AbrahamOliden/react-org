import './Team.css'

function Team(props) {
    return (
        <section className='team' >
            <h3 className='team__header title' >{props.team}</h3>
            <div className="collaborators"></div>
        </section>
    );
};

export default Team