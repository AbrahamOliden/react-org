import './my-org.css'
import Collapse from '../../assets/collapse.png'

function MyOrg() {
    return (
        <section className='org'>
            <div role='none' className='org__header' >
                <h2 className='org__header__title title'>My Organization</h2>
                <button className='org__header__button'>
                    <img src={Collapse} ></img>
                </button>
            </div>
            
        </section>
    );
};

export default MyOrg;