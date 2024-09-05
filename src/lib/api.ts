import axios, { Method } from "axios";
import dotenv from "dotenv"

dotenv.config()

export class Api {
    async request<R = any, D = any>(method: Method, url: string, body?: D ) {
        const response = await axios.request<R>({
            baseURL: process.env.API_ASAAS_URL,
            headers: {
                access_token: process.env.TOKEN_ASAAS,
            },
            method,
            url,
            data: body
        })

        return response.data
    }  
}