import React from 'react'
import Navbar from '../components/Navbar'
import HeroLandingPage from '../components/HeroLandingPage'
import NewlyAddedPromo from '../components/NewlyAddedPromo'
import DnPromo from '../components/DnPromo'
import CarouselContainer from '../containers/CarouselContainer'
import CategoryCarousel from '../containers/CategoryCarousel'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div className='overflowhidden'>
            <Navbar />
            <HeroLandingPage />
            <NewlyAddedPromo />
            <DnPromo />
            <CarouselContainer />
            <CategoryCarousel />
            <Footer />
        </div>
    )
}

export default LandingPage
