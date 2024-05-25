import headerImage from '../../assets/header.png'
import './Header.css'

function Header() {
    return (
        <>
        <header className='header'>
            <img src={headerImage} className='header__image' alt="Header background image" />
        </header>
        </>
    );
};

export default Header;