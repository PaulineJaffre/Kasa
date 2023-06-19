import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
				<Route path="/notfound" element={<NotFound />} />
				<Route path="/about" element={<About />} />
				<Route path="/accomodation" element={<Accomodation />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)

