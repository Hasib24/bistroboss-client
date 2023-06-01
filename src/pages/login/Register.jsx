import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../../providers/AuthContextProvider';


const Register = () => {
    const {createUser, setUser} = useContext(AuthContex)
    let [show, setShow] = useState(false);
    const captaRef = useRef()
    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    
    const handleRegester = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then((res) =>{
            setUser(res.user)
        } )
        .catch(error => {
            console.log(error.message)
        })
    }




    return (
        <div className='border flex justify-center'>
            <h1>Register</h1>
            <form className='py-5' onSubmit={handleRegester}>
                <input className='m-2 p-1 border rounded-md outline-none' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='m-2 p-1 border rounded-md outline-none' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>

                <LoadCanvasTemplate />
                <input  className='m-2 p-1 border rounded-md outline-none' type="captcha" ref={captaRef} name="captcha" id="captcha" placeholder='captcha'/> <br />

                <input className='m-2 p-1 border rounded-md cursor-pointer' type="submit" name="submit" id="submit" value="Login" />
            </form>
            
        </div>
    );
};

export default Register;