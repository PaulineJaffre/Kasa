import Home from './pages/home/Home';
import Error from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import './sass/App.scss';
import Nav from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom";



function App() {

    return (
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element ={<Home  /> } />
          <Route path='/about' element ={<About /> } />
          <Route path='/accomodation/:id' element ={<Accomodation /> } />
          <Route path='/*' element ={<Error /> } />
        </Routes>
        <Footer />
      </div>
    );
  }
  
  export default App;





