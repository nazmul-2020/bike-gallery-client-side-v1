import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // const [signInWithXXX, user, loading, error] = useSignInWithXXX(auth);
    console.log(gUser)

    const navigate = useNavigate();

    let errorElement;

    if (gLoading) {
        return <Loading></Loading>
    }

    if (gError) {
        errorElement = <p className='text-danger'>Error: {gError?.message} </p>
    }

    if (gUser) {
        return (
            navigate('/home')
        );
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
                <p className='pt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <div className=''>
                    <button onClick={() => signInWithGoogle()} className='btn  w-75 text-white mx-auto d-block my-3 bg-primary'>
                        <span className='px-2'>Google Sign In</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SocialLogin;