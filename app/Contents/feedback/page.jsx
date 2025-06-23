"use client"
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { postfeed } from '@/app/api/query';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showfeeds } from '@/app/api/query';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

const page = () => {

const queryclient=useQueryClient()

const [feeding,setFeeding]=useState('')
const [rating,setRating]=useState(0)


const {data,isLoading}=useQuery({
  queryKey:['showfeeds'],
  queryFn:showfeeds
})



    const mutation=useMutation({
        mutationFn:postfeed,
        onSuccess:(data)=>{
            // alert('done')
            console.log(data)
             queryclient.invalidateQueries({queryKey:['showfeeds']})
             setFeeding('')
             setRating(0)
        }
    })

    const handlefeeds=(e)=>{
        e.preventDefault()
        const feedsdata={
            feed:feeding,
            rating:parseInt(rating)
        }
        mutation.mutate(feedsdata)
    }

    console.log("newdata",data)
    if(isLoading) return <p>isLoading</p>

  return (
    <div id='feeback' className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form id='Feedback' className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-3xl space-y-6" onSubmit={handlefeeds}>
        <h2 className="text-2xl font-semibold text-white text-center">We Value Your Feedback</h2>

        <textarea
          className="w-full h-32 p-3 text-white bg-gray-700 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your feedback..."
          value={feeding}
          onChange={(e)=>setFeeding(e.target.value)}
        />
     
        {[...Array(5)].map((_,i) => (
          <StarOutlinedIcon key={i} onClick={()=>setRating(i+1)} className={`${i<=rating-1?'text-[yellow]':'text-[white]'}`}/>
        ))}

        <input
          type="submit"
          value="Submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-300"
        />
      </form>
    </div>
  );
};

export default page;
