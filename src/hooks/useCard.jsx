import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContex } from "../providers/AuthContextProvider";

const useCard = () => {
    const {user} = useContext(AuthContex)
    
   

    const { isLoading, refetch, isError, data: cart = [], error } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json()
        },
    })

    return [cart, refetch]


};

export default useCard;