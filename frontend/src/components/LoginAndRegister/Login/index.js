import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../loginAndRegister.css";
import {Helmet} from "react-helmet";
import Header from "../../Header";

export default function Login() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const login = () => {
        console.log("Successfully Login!");
    };

    return (
        <>
            <Helmet>
                <title>Login | University Rater</title>
            </Helmet>
            <div className="container mt-5">
                <Header active="profile"/>

                <div className="row align-items-center">
                    <div className="d-none d-md-block col-md-5">
                        <img className="wd-login-bg mt-5"
                             src="/images/school.jpeg"
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
                            <label htmlFor="usernameInput" className="form-label">
                                Username
                                <span className="wd-color-coral">*</span>
                            </label>
                            <input className="form-control" id="usernameInput"
                                   placeholder="your username" autoComplete="username"
                                   value={user.username}
                                   onChange={(e) =>
                                       setUser({...user, username: e.target.value})}/>
                        </div>
                        <div className="ms-3 mb-3">
                            <label htmlFor="passwordInput" className="form-label">
                                Password
                                <span className="wd-color-coral">*</span>
                            </label>
                            <input type="password" autoComplete="current-password"
                                   className="form-control" id="passwordInput"
                                   placeholder="your password"
                                   value={user.password}
                                   onChange={(e) =>
                                       setUser({...user, password: e.target.value})}
                                   />
                        </div>
                        <div className="mt-5 text-center">
                            <button className="btn btn-outline-primary wd-button w-50"
                                    onClick={login}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
