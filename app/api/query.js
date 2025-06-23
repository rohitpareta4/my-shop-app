import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log("apiUrl",apiUrl)

export const postfeed=async(feeddata)=>{
   try {
    const res=await axios.post(`${apiUrl}/feeds`,feeddata)
    console.log("resdata",res.data)
    return res.data
   } catch (error) {
    console.log(error)
    
   }
}

export const showfeeds=async()=>{
    console.log("get is hit")
    try {
        console.log("url is",`${apiUrl}/getfeeds`)
           const res=await axios.get(`${apiUrl}/getfeeds`)
           console.log("newresdata",res.data)
           return res.data
    } catch (error) {
        console.log(error)
        throw new error
    }
}

