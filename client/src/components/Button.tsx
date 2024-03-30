import React from 'react'

type ButtonProps = {
    text: string
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return (
        <div className='border-1 border-transparent rounded-full bg-black text-white font-semibold px-4 py-2 cursor-pointer hover:bg-gray-600'>
            {text}
        </div>
    )
}

export default Button
