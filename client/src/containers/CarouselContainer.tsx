import React from 'react'
import ItemCard from '../components/ItemCard'
import DnPromoObject from '../utils/DnShoesObject'

const CarouselContainer = () => {
    return (
        <div className='flex flex-col items-center w-full bg-primary pt-4 pb-8'>
            <div className='w-[90%] text-lg pb-8'>Dynamic Air Unit</div> {/* Match the width of the image container */}
            <div className='w-[90%] '>
                <div className='flex w-full space-x-4 custom-scrollbar overflow-x-auto overflow-y-hidden pb-8'> 
                    {DnPromoObject.shoes.map(shoe => (
                        <div key={shoe.id}>
                            <ItemCard id={shoe.id} cover={shoe.cover} info={shoe.info} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselContainer
