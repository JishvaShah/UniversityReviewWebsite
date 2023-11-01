import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {Component} from "react";
import HelloWorld from "./components/hello-world";
import Login from "./components/Main/LoginAndRegister/Login";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Register from "./components/Main/LoginAndRegister/Register";
import Explore from "./components/Main/Explore";
import Profile from "./components/Main/Profile";
import AllReviews from "./components/Main/AllReviews";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import {Provider} from "react-redux";
import userReducer from "./components/reducers/userReducer";
import { configureStore } from '@reduxjs/toolkit'
import Review from "./components/pages/Review";

const store = configureStore({ reducer: userReducer });


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
            <div className="container">
                <Routes>
                    <Route path="/home"
                           exact={true}
                           element={<Home/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Home/>}/>
                    <Route path="/login"
                           exact={true}
                           element={<Login/>}/>
                    <Route path="/register"
                           exact={true}
                           element={<User/>}/>
                    <Route path="/explore"
                           exact={true}
                           element={<Explore/>}/>
                    <Route path="/profile"
                           exact={true}
                           element={<User/>}/>
                    <Route path="/allReviews/:id"
                           exact={true}
                           element={<AllReviews/>}/>
                    <Route path="/addReviews/:id"
                           exact={true}
                           element={<Review/>}/>
                    <Route path="/details/:id"
                           exact={true}
                           element={<AllReviews/>}/>
                </Routes>
            </div>
            </Provider>
        </BrowserRouter>
    );

}

export default App;