import axios from 'axios'
import ShoeInterface from '../interfaces/ShoeInterface'

const fetchData = async (): Promise<ShoeInterface[] | null> => {
    try {
        const response = await axios.get('http://localhost:3000/shoes')
        return response.data
    } catch (error) {
        console.log('Error fetching data: ', error)
        return null        
    }
}

export default fetchData