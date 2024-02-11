'use client'
import useSWR from 'swr';
import Link from 'next/link';


const userdata = () => {
    
    const Fetcher = (...args) => fetch(...args).then( res => res.json())
    const {data , error} = useSWR('https://dummyjson.com/users' , Fetcher)

    console.log("data" , data);

    if(error){
        return <h1>error</h1>
    }
    if(!data){
        return <h1>loding....</h1>
    }
    
  return (
    <div>
       <h1 className='px-5'>user data</h1>
       {data.users && data.users.map((user) =>(
        <Link href={`/user/${user.id}`} key={user.id} > 
        <div className="px-5"> {user.firstName}</div>
        </Link>
       ))}
    </div>
  )
}

export default userdata;