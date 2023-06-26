import 'src/pages/home/home.scss'
import Banner from 'src/components/banner/Banner';
import Card from 'src/components/card/Card';
import imageBannerHome from 'src/assets/banner-falaises.png'
import accomodations from 'src/data/data.json';


function Home() {
	return (

		<div className='Home'>
        <Banner image = {imageBannerHome} title = "Chez vous, partout et ailleurs" imageClassName="home-banner-img" banner ="home-banner" alt ="paysage de falaises sur un littoral " />
        <section className='container-cards'>
        {accomodations.map((accomodation)=> (
            <Card key={accomodation.id} id={accomodation.id} title={accomodation.title} cover={accomodation.cover} />
        ))}
        </section>
      </div>
	)
	
	
}

export default Home;