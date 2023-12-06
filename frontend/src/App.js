import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import React, { Component } from "react";
import HelloWorld from "./components/hello-world";
import Login from "./components/Main/LoginAndRegister/Login";
import Explore from "./components/Main/Explore";
import AllReviews from "./components/Main/AllReviews";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import {Provider} from "react-redux";
import Profile from "./components/Main/Profile/index.js";
import { configureStore } from '@reduxjs/toolkit'
import Review from "./components/pages/Review";
import Search from "./components/Main/Search";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Main/Footer";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from "./components/store/store";



function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>

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
                           element={<Profile/>}/>
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

            <Footer/>
            </PersistGate>
        </BrowserRouter>
        </Provider>

    );

}

export default App;