import logo from 'src/assets/logorouge.png'
import './navbar.scss'

import { Link } from 'react-router-dom'
 
function NavBar() {
    return (
        <header className='navigation'>
            <div className='navLogo'>
                <img src={logo} alt='Kasa' className='kasa-logo' />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar

