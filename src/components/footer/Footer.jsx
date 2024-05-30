import logo from '/footer-logo.png'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer' style={{backgroundImage: 'url(/footer-background.png)'}} >
            <div className='socials'>
                <a href="https://github.com/AbrahamOliden" className='socials__link' >
                    <i className='fa-brands fa-github'></i>
                </a>
                <a href="https://www.freecodecamp.org/Abraham_Oliden" className='socials__link' >
                    <i className='fa-brands fa-free-code-camp'></i>
                </a>
                <a href="https://www.linkedin.com/in/abraham-oliden/" className='socials__link' >
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </div>
            <img src={logo} alt="Project's logo"></img>
            <strong className='credits' >Developed by Abraham Oliden</strong>
        </footer>

    )
}

export default Footer