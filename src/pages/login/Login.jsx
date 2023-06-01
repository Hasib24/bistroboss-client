import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { AuthContex } from './contex/AuthProvider';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthContextProvider';



const Login = () => {
    const {signInUser, setUser} = useContext(AuthContex)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const onSubmit = data =>{

        
        const email = data.email;
        const password = data.password;
        signInUser(email, password)
        .then(data => {
            setUser(data.user)
            navigate(from)
            
        
        })
        
    
    } 


 
    

    return (
        <div className='border flex justify-center'>
            <h1>Login</h1>
            <form className='py-5' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} className='m-2 p-1 border rounded-md outline-none' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input {...register("password")} className='m-2 p-1 border rounded-md outline-none' type="password" name="password" id="password" placeholder='Password' required /> <br />
                
                <input className='m-2 p-1 border rounded-md cursor-pointer' type="submit" name="submit" id="submit" value="Login" />
                <h1>Don't have an account? <Link to='/register' className='text-blue-500'>Regester</Link></h1>
            </form>
        </div>
    );
};

export default Login;