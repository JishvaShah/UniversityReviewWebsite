import React, { useState } from "react";
import "../styles/User.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Main/Header";
import profileimg from "../images/profileimg.jpeg";

export default function User() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <div className="container mt-2 mb-3">
        <Header active="profile" />
        <div className="row">
          <div className="col-md-6 col-img">
            <img
              src={profileimg}
              alt="User Profile Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-user">
            <h2>Create Your Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn user">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
