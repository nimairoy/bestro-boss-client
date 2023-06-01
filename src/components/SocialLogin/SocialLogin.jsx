import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })

            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='flex justify-center py-4'>
                <button onClick={handleSignInWithGoogle} className="border border-primary w-3/4 items-center px-2 py-1 rounded-lg flex justify-center"><AiOutlineGoogle className='text-3xl mr-2 text-yellow-500'></AiOutlineGoogle> <span>Sign In With Google</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;