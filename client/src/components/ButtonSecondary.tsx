import React from 'react'

type ButtonProps = {
    text: string
}

const ButtonSecondary: React.FC<ButtonProps> = ({text}) => {
    return (
        <div className='border-1 border-transparent rounded-full bg-primary text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200'>
            {text}
        </div>
    )
}

export default ButtonSecondary
