import falaises from '../assets/Falaises.png'
import './banner.scss'

function Banner() {
    const title = 'Chez vous, partout et ailleurs'
    return (
    <div className='banner'>
        <img src={falaises} alt='photo falaises' className='banner-falaises' />
		<h1 className='kasa-title'>{title}</h1>
    </div>
    )
}

export default Banner