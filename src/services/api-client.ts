import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5cc5f2d1f1384d6badba9c43acb71958'
    }
})