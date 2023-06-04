import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContex } from "../providers/AuthContextProvider";

const useCard = () => {
    const {user} = useContext(AuthContex)
    
   

    const { data: cart = [], refetch} = useQuery({
        queryKey: ['carts', user?.email],
        enabled : !! user,  
        queryFn: async()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json()
        },
    })

    return [cart, refetch]


};

export default useCard;