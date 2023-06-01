import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../../providers/AuthContextProvider';

import { useForm } from "react-hook-form";



const Register = () => {
    let [show, setShow] = useState(false);
    const captaRef = useRef()

    const {createUser, setUser} = useContext(AuthContex)
      
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{

        
        const email = data.email;
        const password = data.password;
        
        createUser(email, password)
        .then((res) =>{
            setUser(res.user)
            console.log(res);
        } )
        .catch(error => {
            console.log(error.message)
        })
    } 


    

  
    
 




    return (
        <div className='border flex justify-center'>
            <h1>Register</h1>
            <form className='py-5' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", {required : true})} className='m-2 p-1 border rounded-md outline-none' type="email" name="email" id="email" placeholder='Enter email'  /> <br />
                {errors.email?.type === 'required' && <p className='text-red-600'>First name is required</p>}
                <input {...register("password")} className='m-2 p-1 border rounded-md outline-none' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password'  /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>

                <LoadCanvasTemplate />
                <input  className='m-2 p-1 border rounded-md outline-none' type="captcha" ref={captaRef} name="captcha" id="captcha" placeholder='captcha'/> <br />

                <input className='m-2 p-1 border rounded-md cursor-pointer' type="submit" name="submit" id="submit" value="Login" />
            </form>
            
        </div>
    );
};

export default Register;