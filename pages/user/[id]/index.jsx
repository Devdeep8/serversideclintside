import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'


const userInfo = () => {
    const Fetcher = (...args) => fetch(...args).then( res => res.json())
    const router = useRouter()
    const id = router.query.id;
    const {data , error} = useSWR(`https://dummyjson.com/users/${id}` , Fetcher)

    console.log(data);

    if(error){

        return <h1>error</h1>
    }
    if(!data){
        return <h1>loding...</h1>
    }

  return (
    <div className='flex flex-col justify-center overflow-hidden items-center h-screen w-screen'>
        <h1>user info</h1>
        <div className='' >
            <p>{data.firstName}</p>
            <p>{data.age}</p>
            <p>{data.email}</p>
            <p>{data.gender}</p>
            <p>{data.phone}</p>
        </div>

    </div>

  )
}

export default userInfo