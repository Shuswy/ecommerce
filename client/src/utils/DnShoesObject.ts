import dnshoe1 from '../assets/dn-shoes/dn-shoe-1.png'
import dnshoe2 from '../assets/dn-shoes/dn-shoe-2.png'
import dnshoe3 from '../assets/dn-shoes/dn-shoe-3.png'
import dnshoe4 from '../assets/dn-shoes/dn-shoe-4.png'
import dnshoe5 from '../assets/dn-shoes/dn-shoe-5.png'
import dnshoe6 from '../assets/dn-shoes/dn-shoe-6.png'
import dnshoe7 from '../assets/dn-shoes/dn-shoe-7.png'
import dnshoe8 from '../assets/dn-shoes/dn-shoe-8.png'
import dnshoe9 from '../assets/dn-shoes/dn-shoe-9.png'
import dnshoe10 from '../assets/dn-shoes/dn-shoe-10.png'

type info = {
    title: string
    category: string
    price: number
}

type DnShoes = {
    id: number,
    cover: string
    info: info
}

type DnShoesArray = {
    shoes: DnShoes[]
}

const DnPromoObject: DnShoesArray = {
    shoes: [
        {
            id: 0,
            cover: dnshoe1,
            info: {
                title: 'Nike Air Max Dn',
                category: "Men's Shoes",
                price: 329.99
            }
        },
        {
            id: 1,
            cover: dnshoe2,
            info: {
                title: 'Nike Air Max Dn',
                category: "Shoes",
                price: 329.99
            }
        },
        {
            id: 2,
            cover: dnshoe3,
            info: {
                title: 'Nike Air Max Dn',
                category: "Kid's Shoes",
                price: 259.99
            }
        },
        {
            id: 3,
            cover: dnshoe4,
            info: {
                title: 'Nike Air Max Dn',
                category: "Shoes",
                price: 329.99
            }
        },
        {
            id: 4,
            cover: dnshoe5,
            info: {
                title: 'Nike Air Max Dn',
                category: "Shoes",
                price: 329.99
            }
        },
        {
            id: 5,
            cover: dnshoe6,
            info: {
                title: 'Nike Air Max Dn',
                category: "Women's Shoes",
                price: 329.99
            }
        },
        {
            id: 6,
            cover: dnshoe7,
            info: {
                title: 'Nike Air Max Dn',
                category: "Kids's Shoes",
                price: 259.99
            }
        },
        {
            id: 7,
            cover: dnshoe8,
            info: {
                title: 'Nike Air Max Dn',
                category: "Shoes",
                price: 329.99
            }
        },
        {
            id: 8,
            cover: dnshoe9,
            info: {
                title: 'Nike Air Max Dn',
                category: "Kid's Shoes",
                price: 259.99
            }
        },
        {
            id: 9,
            cover: dnshoe10,
            info: {
                title: 'Nike Air Max Dn',
                category: "Shoes",
                price: 329.99
            }
        }
    ]
}

export default DnPromoObject