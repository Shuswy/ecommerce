import React from 'react'
import hero from '../assets/heroimage.png'

const HeroLandingPage = () => {
    return (
        <div className='w-full cursor-pointer bg-black overflow-hidden'>
            <img src={hero} alt="Hero Image" />
        </div>
    )
}

export default HeroLandingPage
