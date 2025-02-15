import React from 'react'
import Navbar from './components/navbar/Navbar'
import Listings from './components/Listings/Listings'
import Categories from './components/navbar/Categories'
import Footer from './components/elements/Footer'
import HeroBanner from './components/elements/HeroBanner'
const App = () => {
    return (
        <main>
            {/* <HeroBanner /> */}
            <Navbar />
            <Categories />
            <Listings />
            <Footer />
        </main>
    )
}

export default App
