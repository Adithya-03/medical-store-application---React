import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'
import { Link } from "react-router-dom";

function Register() {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf
        }
        axios.post('https://medicalstore.mashupstack.com/api/register',user).then(response=>{
            setErrorMessage('');
            navigate('/login');
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }
    return <div className="container">
        
        <div className="register-med">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="reg">
                    <div className="card card-reg">
                        <div className="card-body">
                            <h1 className="card-title">Register</h1>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text"
                                    className="form-control"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password:</label>
                                <input type="password"
                                    className="form-control"
                                    value={passwordConf}
                                    onChange={(event) => setPasswordConf(event.target.value)}
                                />
                            </div>
                            <div className="bottom-line">
                            <div className="form-group">
                                <button className="btn btn-success float-right" onClick={registerUser}>Submit</button>
                                <p>Aleady have Account? <span className="login" ><Link to={'/login'} style={{ color: 'green', textDecoration: 'none' }}>Login</Link></span></p>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Register;