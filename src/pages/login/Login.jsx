import React, { useContext, useEffect, useRef, useState } from 'react';
// import { AuthContex } from './contex/AuthProvider';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captaRef = useRef()
    let [show, setShow] = useState(false);
    // import context 
    // const { logInUser, setUser } = useContext(AuthContex);
    const navigate = useNavigate();


    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleCaptaValidation= ()=>{
        const captaValue = captaRef.current.value
        
       if (validateCaptcha(captaValue)===true) {
        alert('Captcha Matched');
        
    }

    else {
        alert('Captcha Does Not Match');
       
    }
    }


    // const handleLogin = (e) =>{
    //     e.preventDefault()
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

        // logInUser(email, password)
        // .then(result =>{
        //     let user = result.user;
        //     let logedUser ={
        //         email : user.email
        //     }
        //     setUser(user)

        //     fetch('http://localhost:5000/jwt',{
        //         method: 'POST',
        //         headers:{'content-type': 'application/json'},
        //         body: JSON.stringify(logedUser)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         //Warning: save to localstorage
        //         localStorage.setItem("Token", data.token)
            
        //     })

        //     // navigate(from, {replace: true})
        // })
        // .catch(error => console.log(error.message))
    }

    return (
        <div className='border flex justify-center'>
            <h1>Login</h1>
            <form className='py-5' onSubmit={handleLogin}>
                <input className='m-2 p-1 border rounded-md outline-none' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='m-2 p-1 border rounded-md outline-none' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>

                <p><LoadCanvasTemplate /></p>
                <input onBlur={handleCaptaValidation} className='m-2 p-1 border rounded-md outline-none' type="captcha" ref={captaRef} name="captcha" id="captcha" placeholder='captcha' required /> <br />

                <input className='m-2 p-1 border rounded-md cursor-pointer' type="submit" name="submit" id="submit" value="Login" />
                <h1>Don't have an account? <Link to='/register' className='text-blue-500'>Regester</Link></h1>
            </form>
        </div>
    );
};

export default Login;