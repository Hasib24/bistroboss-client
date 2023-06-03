import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../../providers/AuthContextProvider';

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';




const Register = () => {
    let [show, setShow] = useState(false);
    const captaRef = useRef()
    const navigate = useNavigate()

    const { setUser, createUser, googleSignIn, updateUserProfile} = useContext(AuthContex)
      
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])



    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data =>{

        const name = data.name;
        const photoURL = data.photoURL
        const email = data.email;
        const password = data.password;
        
        createUser(email, password)
        .then((res) =>{

            updateUserProfile(name, photoURL)
            .then(()=>{

                const saveUser = {name : name, email : email}
                fetch('http://localhost:5000/users',{
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data=>{
                    if(data.insertedId){

                        if(data.insertedId){

                            
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            reset();
                            navigate('/')
                    
                        }


                    }
                })

                
            }
            )
            
        } )
        .catch(error => {
            console.log(error.message)
        })
    } 



        const handleGooglesignin=()=>{
            googleSignIn()
            .then(result =>{
                setUser(result.user)
                // navigate(from, {replace: true})

                const saveUser = {name : result.user.displayName, email : result.user.email}
                fetch('http://localhost:5000/users',{
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data=>{
                            
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'login successfull.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    
                })
            
            })
            .catch(error => console.log(error.message))
           

        }
    

  
    





    return (
        <div className='border flex justify-center'>
            <h1>Register</h1>
            <form className='py-5' onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", {required : true})} className='m-2 p-1 border rounded-md outline-none' type="name" name="name" id="name" placeholder='Your name'  /> <br />
                {errors.name?.type === 'required' && <p className='text-red-600'>Your name is required</p>}

                <input {...register("photoURL", {required : true})} className='m-2 p-1 border rounded-md outline-none' type="photoURL" name="photoURL" id="photoURL" placeholder='Photo URL'  /> <br />
                {errors.photoURL?.type === 'required' && <p className='text-red-600'>Photo URL is required</p>}

                <input {...register("email", {required : true})} className='m-2 p-1 border rounded-md outline-none' type="email" name="email" id="email" placeholder='Enter email'  /> <br />
                {errors.email?.type === 'required' && <p className='text-red-600'>First name is required</p>}
                <input {...register("password")} className='m-2 p-1 border rounded-md outline-none' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password'  /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>

                <LoadCanvasTemplate />
                <input  className='m-2 p-1 border rounded-md outline-none' type="captcha" ref={captaRef} name="captcha" id="captcha" placeholder='captcha'/> <br />

                <input className='m-2 p-1 border rounded-md cursor-pointer' type="submit" name="submit" id="submit" value="Login" />
                <button onClick={()=>handleGooglesignin()} className='text 2xl font-bold border rounded-full p-2 px-4'> G</button>
            </form>
            
        </div>
    );
};

export default Register;