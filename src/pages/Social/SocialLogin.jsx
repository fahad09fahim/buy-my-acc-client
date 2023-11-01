import React, { useContext } from 'react';
import {  FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='text-center'>
            <button onClick={handleGoogleSignIn} >
                <FcGoogle className='h-9 w-9' />
            </button>
        </div>
    );
};

export default SocialLogin;