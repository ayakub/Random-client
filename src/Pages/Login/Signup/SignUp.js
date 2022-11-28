import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate, } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Contex/AuthProvidor';

const SignUp = () => {
    const { createUser, googleSignUp, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const googleProvidor = new GoogleAuthProvider()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');


    const handleSignUp = (data) => {
        setSignUPError('');
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                navigate('/')
                swal("signup!", "successfully!", "success");
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);

                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    const handleWithGoogleSignIn = () => {
        googleSignUp(googleProvidor)
            .then(result => {
                const user = result.user;
                navigate('/')
                swal("signup!", "successfully!", "success");
                const handleUser = {
                    name: user.displayName,
                    email: user.email,
                    role: 'buyer'
                }
                fetch('https://reused-product-sell-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(handleUser)
                })
                    .then(res => res.json())
                    .then(resultgoogle => {
                        console.log(resultgoogle);
                        if (resultgoogle.acknowledged) {

                        }

                    })
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user)
        fetch('https://reused-product-sell-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <label className="label"> <span className="label-text">Chose Option</span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("role", {
                        required: "Name is Required"
                    })} >
                        <option defaultChecked>buyer</option>
                        <option>seller</option>
                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-blue-600' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button
                    onClick={handleWithGoogleSignIn}
                    className='btn btn-primary w-full'>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;