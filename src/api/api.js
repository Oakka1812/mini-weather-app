import axios from "axios";


export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5/"
})

export const  api_key = 'c5c3203da68572011f9c6e71e8dcf330'