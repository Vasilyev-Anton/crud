// crud/src/components/CardService.tsx
import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance= axios.create({
    baseURL:"http://localhost:7070"
})

export default class CardService {
    static async getAll(): Promise<[]>{
        const res = await instance.get("/notes")
        return res.data 
    }

    static async create(id: string , content: string){
         instance.post("/notes", {id, content})
    }

    static async delete(id : string){
         instance.delete(`/notes/${id}`)
    }
}
