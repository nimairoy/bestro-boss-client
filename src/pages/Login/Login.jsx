import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    // console.log(login)
    const [disabled, setDisabled] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                    title: 'Successfully Login',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleValidateCaptcha = (e) => {
        const captchaValue = e.target.value;
        console.log(captchaValue)
        if (validateCaptcha(captchaValue)) {
            setDisabled(false)
        }
        else {
            alert("Captcha don't Matched");
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row ">
                    <div className="text-center w-full md:w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl mb-5 font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <LoadCanvasTemplate />
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type Captcha" className="input input-bordered" />                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center pb-5'>If You are New Please <Link className='text-primary underline font-bold' to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;