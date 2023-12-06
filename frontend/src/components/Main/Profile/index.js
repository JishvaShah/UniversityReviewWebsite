import React, { useState } from "react";
import Header from "../Header";
import "./profile.css";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import userService from "../../service/allServices";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const user = useSelector((state) => state.originalUser);
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [originalPassword, setoriginalPassword] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handlePasswordChange = () => {
    const updatedUser = {
      id: user.id,
      originalPassword: originalPassword,
      newPassword: newPassword,
    };

    userService
      .updateProfile(updatedUser)
      .then((response) => {
        if (response.responseCode === 100) {
          toast.success("Password updated successfully.", {
            position: toast.POSITION.TOP_RIGHT,
          });

          navigate("/explore");
          setoriginalPassword("");
          setNewPassword("");

          setShowChangePassword(false);
        } else {
          toast.error("Error updating password! Check again.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        toast.error("Error updating password! Check again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
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
            <Link to="/login"> Log in </Link> to see or edit your profile
            information.
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

        {user.id !== 0 && (
          <button
            className="profile btn btn-primary mt-3"
            onClick={() => setShowChangePassword(true)}
          >
            Change Password
          </button>
        )}

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
