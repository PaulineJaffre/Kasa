import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { createBrowserHistory, RouterProvider } from 'history';

const history = createBrowserHistory();

const router = createRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "/",
		element: <NotFound />,
    	errorElement: <ErrorPage />
	},
], { history });

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;