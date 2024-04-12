import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../Store/authSlice';
import { useContext } from 'react';
import TokenContext from '../../contect/context';
import './Login.css'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setToken } = useContext(TokenContext);

    const submitLogin = (e) => {
        e.preventDefault();

        const loginuser = {
            email: email,
            password: password
        };

        axios.post('https://medicalstore.mashupstack.com/api/login', loginuser)
            .then(response => {
                const token = response.data.token;
                setToken(token);
                localStorage.setItem('token', token);
                console.log(token)
                navigate('/list');
                dispatch(setUser(response.data.user));
            })
            
            .catch(error => {
                console.error('Error logging in:', error);
                setErrorMessage('Failed to login. Please try again.');
            });
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-md-6">
                        <div className="card card-log">
                            <div className="card-body">
                                <h5 className="card-title">Login</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" value={password} id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className='center-btn'>
                                    <div className='button'>
                                        <button type="submit" className="btn btn-success" onClick={submitLogin}>Login</button>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

