import logo from '..assets/logorouge.png'
import './navbar.scss'

import { Link } from 'react-router-dom'
 
function Navbar() {
    return (
        <nav className='homeMenu'>
            <div className='navLogo'>
            <img src={logo} alt='Kasa' className='kasa-logo' />
            </div>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
        </nav>
    )
}

export default Navbar

