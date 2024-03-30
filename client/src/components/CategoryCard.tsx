import React from 'react'
import ButtonSecondary from './ButtonSecondary'

type CategoryCardProps = {
    id: number
    cover: string
    name: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({id, cover, name}) => {
    return (
        <div className='relative flex flex-col justify-end w-[305px] md:w-[595px] h-[325px] md:h-[660px]'>
            <img src={cover} alt="COVER" className='w-[305px] md:w-[595px] h-[325px] md:h-[660px]'/>
            <div className='absolute p-4'>
                <ButtonSecondary text={name} />
            </div>
        </div>
    )
}

export default CategoryCard
