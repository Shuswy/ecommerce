import sectionKids from '../assets/landing-sections/section-kids.png'
import sectionMen from '../assets/landing-sections/section-men.png'
import sectionWomen from '../assets/landing-sections/section-women.png'

type Category = {
    id: number
    cover: string
    name: string
}

type Categories = {
    categories: Category[]
}

const LandingCategoriesObject: Categories = {
    categories: [
        {
            id: 0,
            cover: sectionWomen,
            name: 'Women'
        },
        {
            id: 1,
            cover: sectionMen,
            name: 'Men'
        },
        {
            id: 2,
            cover: sectionKids,
            name: 'Kids'
        }
    ]
}

export default LandingCategoriesObject