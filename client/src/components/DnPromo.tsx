import React from 'react'
import dnpromo from '../assets/air-max-dn.png'

const DnPromo = () => {
    return (
        <div className='flex flex-col items-center w-full bg-primary'>
            <div className='w-[90%] text-lg'>Dynamic Air Unit</div> {/* Match the width of the image container */}
            <div className='w-[90%] custom-scrollbar overflow-x-auto overflow-y-hidden'>
                <div className='w-[1700px]'> {/* Container matching the image width */}
                    <img src={dnpromo} alt="DN Promo" className='w-full'/>
                </div>
            </div>
        </div>
    )
}

export default DnPromo
