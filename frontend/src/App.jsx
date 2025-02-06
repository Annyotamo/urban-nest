import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Listings from './components/Listings/Listings'
const App = () => {
    return (
        <main>
            <Navbar />
            <Listings />
        </main>
    )
}

export default App
