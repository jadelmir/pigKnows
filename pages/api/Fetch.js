import { useEffect, useState } from "react"

export const fetchUsers = async () =>{

}

export const useFetchUsers = (url, refresh)=>{
    const [users , setUsers ]= useState(null)
    const [loading , setLoading] = useState(false)
    const [hasError , setHasError] = useState(false)

    useEffect( async ()=>{
        setLoading(true)
       try {
           const response = await fetch(url)
           const data = await response.json()
           setUsers(data)
           
       }
       catch{
           setHasError(true)
       }finally{
           setLoading(false)
       }

    }, [refresh])
    return [ users , loading , hasError]
}