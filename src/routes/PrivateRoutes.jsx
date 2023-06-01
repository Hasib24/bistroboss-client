import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom';
// import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
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
          return <Navigate to="/login"></Navigate>
    }

};

export default PrivateRoutes;