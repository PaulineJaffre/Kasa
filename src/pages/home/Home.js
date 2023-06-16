import './home.scss'
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function Home() {
	return (

	<div>
		<Header/>
		<Banner/>
		<Card/>
		<Footer/>
	</div>
	)
	
	
}

export default Home;