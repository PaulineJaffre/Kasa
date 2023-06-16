import logo from '..assets/logonoir.png'
import './footer.scss'

function Footer() {
    return (
    <div className='footer'>
        <div className='navLogo'>
        <img src={logo} alt='Kasa' className='kasa-logonoir' />
        </div>
        <div className='copyright'>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer