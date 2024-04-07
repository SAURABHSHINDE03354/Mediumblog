import axios from "axios"
import { useEffect, useState } from "react"
import { BACKGROUNG_URL } from "../config"

export interface blogsTypes {
    
    content: string,
    title: string,
    id: string,     
    author: { name: string }

}
export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true)
    const[ blogs,setBlogs] = useState<blogsTypes[]>([])

    useEffect(()=>{
        axios.get(`${BACKGROUNG_URL}/api/v1/blog/bulk`,{headers:{
            Authorization:localStorage.getItem("token")
        }})
        .then(response=>{
            console.log(response.data);
            
            setBlogs(response.data.blogs);
            setLoading(false)
        })
    },[])
    return{
        loading,blogs
    }
}

export const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true)
    const[ blog,setBlog] = useState<blogsTypes>()

    useEffect(()=>{
        axios.get(`${BACKGROUNG_URL}/api/v1/blog/get/${id}`,{headers:{
            Authorization:localStorage.getItem("token")
        }})
        .then(response=>{
            console.log(response.data);
            
            setBlog(response.data.blog);
            setLoading(false)
        })
    },[id])
    return{
        loading,blog
    }
}