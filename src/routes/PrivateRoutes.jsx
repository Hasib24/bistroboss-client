import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';
import Swal from 'sweetalert2'
import { Navigate, useLocation } from 'react-router-dom';
// import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const loacation = useLocation()
    console.log(location);
    
    const {user, loader } = useContext(AuthContex)
    if(loader){
        return <div>Loading...</div>
    }
    if(user){
        return children
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'You must login',
            icon: 'error',
            confirmButtonText: 'OK'
          })
          return <Navigate to="/login" state={{from: loacation}} replace></Navigate>
    }

};

export default PrivateRoutes;