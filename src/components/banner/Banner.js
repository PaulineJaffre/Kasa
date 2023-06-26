import falaises from 'src/assets/Falaises.png'
import 'src/components/banner/banner.scss'

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