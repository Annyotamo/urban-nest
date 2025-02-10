import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Listings from './components/Listings/Listings'
import Categories from './components/navbar/Categories'
const App = () => {
    return (
        <main>
            <Navbar />
            <Categories />
            <Listings />
        </main>
    )
}

export default App
