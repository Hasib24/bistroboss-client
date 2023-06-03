import { useQuery } from "@tanstack/react-query";




const Allusers = () => {


    const {data : users = [], refetch } = useQuery(['users'], async ()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })


    return (
        <div>
            all users {users.length}
        </div>
    );
};

export default Allusers;