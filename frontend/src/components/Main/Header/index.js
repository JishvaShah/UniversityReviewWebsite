import React, {useEffect, useState} from 'react'
import HeaderNavItem from "./HeaderNavItem";
import headerNavs from "./headerNavs.json";
import "./header.css";
import {useSelector} from "react-redux";
import { Link, useNavigate  } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserLogout} from "../../store/userSlice";

const Header = ({
                    active = 'home',
                }) => {

    // change the active nav's isActive field
    for (let i = 0; i < headerNavs.length; i++) {
        headerNavs[i].isActive = (headerNavs[i].navTitle === active);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let user = useSelector((state) =>
       state.originalUser
    );

    const logoutUser = () => {
        dispatch(setUserLogout());
        navigate('/home');
    }


    const userInfo = () => {
        if (user.id !== 0) {
            return <div className="d-none d-lg-block col-lg-4 align-self-end text-center">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to="/profile">
                        <button className="login-button">{user.username}</button>
                    </Link>
                    <Link to="/home">
                        <button className="login-button" onClick={logoutUser}>Log out</button>
                    </Link>
                </div>
            </div>;
        }
        return <div className="d-none d-lg-block col-lg-4 align-self-end text-center">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
            </div>

        </div>;
    }


    return (
        <>
            <div className="row wd-home-header">
                <div className="col-3 col-md-3 pt-3">
                    <h4><a href="/home" className="text-danger fw-bold">University Rater</a></h4>
                </div>
                <div className="col-5 col-md-5 col-xl-5 align-self-center">
                    <ul className="nav justify-content-left">
                        {headerNavs.map(nav => {
                            return (
                                <HeaderNavItem key={nav._id}
                                               nav={nav}
                                               isActive={nav.isActive}/>);
                        })}
                    </ul>
                </div>
                {
                  userInfo()
                }


            </div>


        </>
    )
}

export default Header;