import "../styles/User.css";
import Header from "../Main/Header";
import profileimg from "../images/profileimg.jpeg";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    addr: "",
    tel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !formData.username ||
        !formData.email ||
        !formData.password ||
        !formData.addr ||
        !formData.tel
      ) {
        toast.error("Please fill in all required fields.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.responseCode === 100) {
        console.log("User created successfully:", responseData);
        toast.success("Registration Successful!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFormData({
          username: "",
          email: "",
          password: "",
          addr: "",
          tel: "",
        });
        navigate("/login");
      } else {
        console.error("API error:", responseData);

        if (responseData.responseCode === 400) {
          // Business error, username already exists
          toast.error(
            "Username already exists. Please choose a different one.",
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        } else {
          // Other errors
          toast.error("Error during registration. Please try again.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <div className="container mt-2 mb-3">
        <Header active="profile" />
        <div className="row">
          <div className="col-md-6">
            <img
              src={profileimg}
              alt="User Profile Image"
              className="img-fluid user"
            />
          </div>
          <div className="col-md-6 col-user">
            <h2>Create Your Profile</h2>
            <form onSubmit={handleSubmit} className="user-form">
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
                <label htmlFor="addr">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="addr"
                  name="addr"
                  value={formData.addr}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tel">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                  name="tel"
                  value={formData.tel}
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
