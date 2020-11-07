import React from 'react'
import { Navbar, BodyPage, LanggananPage, Footer } from '../../components'
import '../../App.css'

const LandingPage = () => {
    return (
        <div className="container1">
            <Navbar/>
            <BodyPage/>
            <LanggananPage/>
            <Footer />
        </div>
    )
}

export default LandingPage
