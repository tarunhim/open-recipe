import axios from 'axios'

const instance = axios.create({
    baseURL: "https://open-recipe-by-tarun.herokuapp.com/",
})

export default instance