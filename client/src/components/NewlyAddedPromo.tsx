import React from 'react'
import Button from './Button'

const NewlyAddedPromo = () => {
    return (
        <div className='flex flex-col items-center w-full justify-center py-6 overflow-hidden'>
            <div className='text-md font-semibold'>Feel the Unreal</div>
            <div className='text-xxl font-bold pb-6'>AIR MAX DN</div>
            <div className='pb-2'>The next generation of Air technology is here</div>
            <div>
                <Button text='Shop' />
            </div>
        </div>
    )
}

export default NewlyAddedPromo
