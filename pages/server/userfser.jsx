import Link from "next/link";
const userfser = (props) => {
    // console.log('props' , props)
  return (
    <div>
        <h1 className="px-5">userfser</h1>
        {props.data.users.map((user) =>(
             <Link href={`/user/${user.id}`} key={user.id} > 
             <div className="px-5"> {user.firstName}</div>
             </Link>
        ))}
    </div>
  )
}

export const getServerSideProps = async () =>{
    const data = await ( await fetch(` https://dummyjson.com/users`)).json()
  return {
    props: {
        data,
    },
  };
};

export default userfser