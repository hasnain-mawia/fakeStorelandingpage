import axios from "axios";

const apiInstance = axios.create({
    baseURL:'https://fakestoreapi.com',
})

export const Get = (endPoint : string) =>{
    return apiInstance.get(endPoint)
}