import './Member.css'

function Member(props) {
    return (
        <li className='member-card' >
            <div className='background-accent' role='none'></div>
            <div className='background-cream' role='none'></div>
            <div className='info' >
                <img src='' className='info__photo' alt='fotito' ></img>
                <h4>Member</h4>
                <p>Position</p>
            </div>
        </li>
    )
};

export default Member;