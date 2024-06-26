import './my-org.css'
import Collapse from '../../assets/collapse.png'

function MyOrg(props) {

    const handleClick = () => {
        props.changeDisplay();
    };

    return (
        <section className='org'>
            <div role='none' className='org__header' >
                <h2 className='org__header__title title'>My Organization</h2>
                <button onClick={handleClick} className='org__header__button'>
                    <img src={Collapse} alt='Collapse/Expand icon' ></img>
                </button>
            </div>
            
        </section>
    );
};

export default MyOrg;