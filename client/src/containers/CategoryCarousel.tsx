import React from 'react'
import CategoryCard from '../components/CategoryCard'
import LandingCategoriesObject from '../utils/LandingCategoriesObject'

const CategoryCarousel = () => {
    return (
        <div className='flex flex-col items-center w-full bg-primary pt-4 pb-8'>
            <div className='w-[90%] text-lg pb-8'>Discover More</div> {/* Match the width of the image container */}
            <div className='w-[90%] '>
                <div className='flex w-full space-x-4 custom-scrollbar overflow-x-auto overflow-y-hidden pb-8'> 
                    {LandingCategoriesObject.categories.map(category => (
                        <div key={category.id}>
                            <CategoryCard id={category.id} cover={category.cover} name={category.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryCarousel
