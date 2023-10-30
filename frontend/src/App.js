import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {Component} from "react";
import HelloWorld from "./components/hello-world";
import Login from "./components/LoginAndRegister/Login";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Register from "./components/LoginAndRegister/Register";
import Explore from "./components/Explore";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/login"
                         exact={true}
                         element={<Login/>}/>
                  <Route path="/register"
                         exact={true}
                         element={<Register/>}/>
                  <Route path="/explore"
                         exact={true}
                         element={<Explore/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
