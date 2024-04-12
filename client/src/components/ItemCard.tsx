import React from 'react'

type ItemInfo = {
    title: string
    category: string
    price: number
}

type ItemCardProps = {
    id: number,
    cover: string,
    info: ItemInfo
}

const ItemCard: React.FC<ItemCardProps> = ({id, cover, info}) => {
    return (
        <div className='flex flex-col w-[324px] md:w-[562px] space-y-4 font-semibold cursor-pointer'>
            <div>
                <img src={cover} alt="COVER" className='min-w-[324px] md:min-w-[562px] h-[324px] md:h-[562px]'/>
                {/* <img src={cover} alt="COVER" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
            </div>
            <div className='space-y-4'>
                <div>
                    <div>
                        {info.title}
                    </div>
                    <div className='text-gray-400'>
                        {info.category}
                    </div>
                </div>
                <div>
                    BGN {info.price}
                </div>
            </div>
        </div>
    )
}

export default ItemCard
