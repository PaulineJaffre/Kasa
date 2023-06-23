import './home.scss'
//import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
//import Footer from './components/footer/Footer';

//ReactDOM.render(<div><Header /><Banner /><Card /><Footer /></div>, document.getElementById("root"))

function Home() {
	return (

		<div className='Home'>
        <Banner image = {imageBannerHome} title = "Chez vous, partout et ailleurs" imageClassName="home-banner-image" banner ="home-banner" alt ="paysage de rochers sur un littoral " />
        <section className='container-cards'>
        {logements.map((logement)=> (
            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
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