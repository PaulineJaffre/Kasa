import logo from '..assets/logorouge.png'
import './navbar.scss'

function NavBar() {
    return (
    <div className='homeMenu'>
        <div className='navLogo'>
        <img src={logo} alt='Kasa' className='kasa-logo' />
        </div>
        <div className='navbar'>
            <ul>Accueil</ul>
            <ul>A propos</ul>
        </div>
    </div>
    )
}

export default NavBar