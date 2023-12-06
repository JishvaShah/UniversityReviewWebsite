import React, { useState } from "react";
import Header from "../Header";
import "./profile.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userService from "../../service/allServices";

export default function Profile() {
  const user = useSelector((state) => state.originalUser);
  const [newPassword, setNewPassword] = useState("");
  const [originalPassword, setoriginalPassword] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handlePasswordChange = () => {
    const updatedUser = {
      id: user.id,
      originalPassword: originalPassword,
      newPassword: newPassword,
    };
    console.log(updatedUser);
    userService
      .updateProfile(updatedUser)
      .then((response) => {
        console.log("Password updated successfully", response);

        // Clear sensitive data from state after use
        setoriginalPassword("");
        setNewPassword("");

        // Hide the change password section after successful update
        setShowChangePassword(false);
      })
      .catch((error) => {
        console.error("Error updating password:", error);
      });
  };

  const userInfo = () => {
    if (user.id !== 0) {
      return (
        <div className="profile mt-4">
          <h2>- Your Profile Information -</h2>
          <form>
            <div className="profile mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={user.username}
                readOnly
              />
            </div>
            <div className="profile mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={user.email}
                readOnly
              />
            </div>
            <div className="profile mb-3">
              <label htmlFor="tel" className="form-label">
                Telephone:
              </label>
              <input
                type="text"
                className="form-control"
                id="tel"
                value={user.tel}
                readOnly
              />
            </div>
            <div className="profile mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={user.address}
                readOnly
              />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="profile align-items-center mt-4">
          <h2>Hey, seems like you haven't logged in.</h2>
          <p>
            <Link to="/login"> Log in </Link> to see or edit your profile information.
          </p>
        </div>
      );
    }
  };
  

  return (
    <>
      <Helmet>
        <title>Profile | University Rater</title>
      </Helmet>
      <Header active="profile" />
      <div className="container profile mt-4 text-center">
        {userInfo()}
  
        {/* Show Change Password Section Button */}
        {user.id !== 0 && (
          <button
            className="profile btn btn-primary mt-3"
            onClick={() => setShowChangePassword(true)}
          >
            Change Password
          </button>
        )}
  
        {/* Change Password Section */}
        {showChangePassword && (
          <div className="profile mt-4">
            <h2>- Change Password -</h2>
            <div className="profile mb-3">
              <label htmlFor="originalPassword" className="form-label">
                Current Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="originalPassword"
                value={originalPassword}
                onChange={(e) => setoriginalPassword(e.target.value)}
              />
            </div>
            <div className="profile mb-3">
              <label htmlFor="newPassword" className="form-label">
                New Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              className="profile btn btn-primary"
              onClick={handlePasswordChange}
            >
              Update Password
            </button>
          </div>
        )}
      </div>
    </>
  );
  
}
