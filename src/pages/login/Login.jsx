import React, { useContext, useState } from 'react';
// import { AuthContex } from './contex/AuthProvider';
import { json, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    let [show, setShow] = useState(false);
    // import context 
    // const { logInUser, setUser } = useContext(AuthContex);
    const navigate = useNavigate();


    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';


    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
        .then(result =>{
            let user = result.user;
            let logedUser ={
                email : user.email
            }
            setUser(user)

            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(logedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                //Warning: save to localstorage
                localStorage.setItem("Token", data.token)
            
            })

            // navigate(from, {replace: true})
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className='border flex justify-center'>

            <form className='py-5' onSubmit={handleLogin}>
                <input className='m-2 p-1 border rounded-md outline-none' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='m-2 p-1 border rounded-md outline-none' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>
                <input className='m-2 p-1 border rounded-md cursor-pointer' type="submit" name="submit" id="submit" value="Login" />
            </form>
            
        </div>
    );
};

export default Login;