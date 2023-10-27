import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Header from "../../Header";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        verifyPassword: "",
    });


    const register = () => {
        // check password verify
        if (user.username === "" ||
            user.password === "" ||
            user.password !== user.verifyPassword) {
            alert("Please check your username and password.")
            return;
        }
        console.log("before send, ", user);
    };


    return (
        <>
            <Helmet>
                <title>Register | University Rater</title>
            </Helmet>

            <div className="container mt-5">
                <Header active="profile"/>
                <div className="row align-items-center">
                    <div className="d-none d-md-block col-md-5">
                        <img className="wd-login-bg mt-5"
                             src="/images/register.jpeg"
                             alt=""/>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="text-center mb-3">
                            <Link to="/login">
                                <button className="btn btn-outline-primary wd-button wd-button-transparent">
                                    Login
                                </button>
                            </Link>
                            <span className="wd-color-coral"> | </span>
                            <Link to="/register">
                                <button className="btn btn-outline-primary wd-button wd-button-transparent">
                                    Register
                                </button>
                            </Link>
                        </div>
                        <div className="ms-3 mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                                <span className="wd-color-coral">*</span>
                            </label>
                            <input className="form-control" id="username"
                                   placeholder="your username" autoComplete="username"
                                   value={user.username}
                                   onChange={(e) =>
                                       setUser({...user, username: e.target.value})}/>
                        </div>
                        <div className="ms-3 mb-3">
                            <label htmlFor="password1" className="form-label">
                                Password
                                <span className="wd-color-coral">*</span>
                            </label>
                            <input type="password" autoComplete="new-password"
                                   className="form-control" id="password1"
                                   placeholder="your password"
                                   value={user.password}
                                   onChange={(e) =>
                                       setUser({...user, password: e.target.value})}/>
                        </div>
                        <div className="ms-3 mb-3">
                            <label htmlFor="password2" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="password2"
                                   placeholder="Verify Password" autoComplete="current-password"
                                   onChange={(e) =>
                                       setUser({...user, verifyPassword: e.target.value})}/>
                            {
                                user && user.verifyPassword !== "" && user.password !== user.verifyPassword &&
                                <span className="wd-color-red">Password don't match</span>
                            }
                        </div>
                        <div className="ms-3 mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="email"
                                   autoComplete="email"
                                   className="form-control" id="email"
                                   placeholder="username@email.com"
                                   value={user.email}
                                   onChange={(e) =>
                                       setUser({...user, email: e.target.value})}/>
                        </div>

                        <div className="mt-5 text-center">
                            <button className="btn btn-outline-primary wd-button w-50"
                                    onClick={register}>
                                Register
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

};
export default Register;