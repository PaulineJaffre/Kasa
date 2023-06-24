import './home.scss'
//import Header from './components/header/Header';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card';
//import Footer from './components/footer/Footer';
import imageBannerHome from '../assets/banner-falaises'
import accomodations from '../datas.json';

//ReactDOM.render(<div><Header /><Banner /><Card /><Footer /></div>, document.getElementById("root"))

function Home() {
	return (

		<div className='Home'>
        <Banner image = {imageBannerHome} title = "Chez vous, partout et ailleurs" imageClassName="home-banner-image" banner ="home-banner" alt ="paysage de rochers sur un littoral " />
        <section className='container-cards'>
        {accomodations.map((accomodation)=> (
            <Card key={accomodation.id} id={accomodation.id} title={accomodation.title} cover={accomodation.cover} />
        ))}
        </section>
      </div>
	/*<div>
		<Header />
		<Banner />
		<Card />
		<Footer />
	</div>*/
	)
	
	
}

export default Home;