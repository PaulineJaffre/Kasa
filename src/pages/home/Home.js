import './home.scss'
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/header/",
		element: <Header />
	},
	{
		path: "/banner",
		element: <Banner />
	},
	{
		path: '/card',
		element: <Card />
	},
	{
		path: "/footer",
		element: <Footer />
	},
]);

function Home() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default Home;