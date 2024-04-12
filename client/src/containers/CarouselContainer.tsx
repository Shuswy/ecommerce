import React, {useEffect, useState} from 'react'
import ItemCard from '../components/ItemCard'
// import DnPromoObject from '../utils/DnShoesObject'
import ShoeInterFace from '../interfaces/ShoeInterface'
import fetchData from '../utils/fetchData'

const CarouselContainer = () => {
    const [data, setData] = useState<ShoeInterFace[] | null>(null)

    useEffect(() => {
        fetchData().then(fetchedData => {
            setData(fetchedData)
        })
    }, [])

    if (!data) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <div className='flex flex-col items-center w-full bg-primary pt-4 pb-8'>
            <div className='w-[90%] text-lg pb-8'>Dynamic Air Unit</div> {/* Match the width of the image container */}
            <div className='w-[90%] '>
                <div className='flex w-full space-x-4 custom-scrollbar overflow-x-auto overflow-y-hidden pb-8'> 
                    {data.map((shoe: ShoeInterFace | null) => {
                        if (!shoe) {
                            return null; // or handle the null case as needed
                        }
                        return (
                            <ItemCard key={shoe.id} id={shoe.id} cover={shoe.cover} info={shoe.info} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default CarouselContainer
