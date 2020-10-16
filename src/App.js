import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'

import Baner from './components/baner/Baner'
import AboutShort from './components/about short/AboutShort'
import OfferShort from './components/offer short/OfferShort'
import About from './pages/about/About'
import Offer from './pages/offer/Offer'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Map from './components/map/Map'
import ContactShort from './components/contact short/ContactShort'





const App = () => {
    return (
        <Router>
            <Navbar />
            
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            <Switch>
                <Route path='/' exact>
                    <Home>
                        <Baner />
                        <AboutShort />
                        <OfferShort />
                        <Map/>
                        <ContactShort/>
             
               
                    </Home>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/offer'>
                    <Offer/>
                </Route>
                <Route path='/contact'>
                    <Contact/>
                </Route>
            </Switch>

            <Footer/>

        </Router>
    )
}

export default App
