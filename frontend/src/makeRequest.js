import axios from "axios"
import { userData } from "./helpers"

const {jwt} = userData();

export const makeRequest =axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        'Content-type': 'application/json',
        Authorization: `bearer` + process.env.REACT_APP_API_TOKEN,
     },
})

export const make =axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        Authorization:`Bearer ${jwt}`
     },
})