import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import HelloWorld from "./components/hello-world";
import Login from "./components/Main/LoginAndRegister/Login";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import Explore from "./components/Main/Explore";
import AllReviews from "./components/Main/AllReviews";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import {Provider} from "react-redux";
import userReducer from "./components/reducers/userReducer";
import { configureStore } from '@reduxjs/toolkit'
import Review from "./components/pages/Review";
import Search from "./components/Main/Search";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Main/Footer";

const store = configureStore({ reducer: {userReducer} });


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
            {/*<div className="container">*/}
            <ToastContainer />
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
                    <Route path="/search"
                           exact={true}
                           element={<Search/>}/>
                </Routes>

            {/*</div>*/}
            </Provider>
            <Footer/>
        </BrowserRouter>
    );

}

export default App;
