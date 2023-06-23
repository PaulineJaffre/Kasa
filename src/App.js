import Home from './pages/home/Home';
import Error from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import './sass/App.scss';
//import React from 'react'
//import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

/*ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
				<Route path="/notfound" element={<NotFound />} />
				<Route path="/about" element={<About />} />
				<Route path="/accomodation" element={<Accomodation />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)*/




