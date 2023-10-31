import React from "react";
import "../styles/Home.css";
import linkedinLogo from "../images/linkedinLogo.png";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";

function Home() {
  return (
    <div className="frame">
      <div className="section1">
        <p className="section1-text">
          University Rater
          <br />
          <br />
          We believe in the power of real and honest student experiences to guide you in making well-informed decisions
          about your academic future. Our platform is your one-stop destination to explore, evaluate, and share in-depth 
          reviews of universities. Whether you&#39;re a prospective student or an alumnus, we&#39;ve got you covered.
        </p>
      </div>
      <div className="section2">
        <button className="login-button">LOG IN</button>
        <div className="vertical-line"></div>
        <button className="register-button">REGISTER</button>
      </div>
      <div className="section3">
        <div className="author-info">
          <div className="author-text">About the authors</div>
        </div>
        <div className="author-cards">
          {/* ------------------------------------------------------Author-1----------------------------------------------- */}
          <div className="author-card">
            <div className="author-image">
              <img className="author-ellipse" alt="author image" src={img1} />
            </div>
            <div className="author-content">
              <p className="author-name">
                Frontend Designer 1 <br /> Jishva Shah
              </p>
              <p className="author-details">
                MSCS Student
                <br />
                Northeastern University
              </p>
            </div>
            <div className="author-linkedin">
              <a href="http://linkedin.com/in/jishvashah3000">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
          </div>
          {/* -----------------------------------------------Author-2----------------------------- */}
          <div className="author-card">
            <div className="author-image">
              <img className="author-ellipse" alt="author image" src={img2} />
            </div>
            <div className="author-content">
              <p className="author-name">
                Frontend Designer 2 <br /> Tingting Jiang
              </p>
              <p className="author-details">
                MSCS Student
                <br />
                Northeastern University
              </p>
            </div>
            <div className="author-linkedin">
              <a href="http://linkedin.com/in/tingting-jiang">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
          </div>
          {/* --------------------------------------------Author-3-------------------------------------- */}
          <div className="author-card">
            <div className="author-image">
              <img className="author-ellipse" alt="author image" src={img3} />
            </div>
            <div className="author-content">
              <p className="author-name">
                Backend Designer 1 <br /> Yixuan Huang
              </p>
              <p className="author-details">
                MSCS Student
                <br />
                Northeastern University
              </p>
            </div>
            <div className="author-linkedin">
              <a href="http://linkedin.com/in/ethan-yixuan-huang">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
          </div>
          {/* -------------------------------------------Author-4----------------------------------------- */}
          <div className="author-card">
            <div className="author-image">
              <img className="author-ellipse" alt="author image" src={img4} />
            </div>
            <div className="author-content">
              <p className="author-name">
                Backend Designer 2 <br /> Jianhua Xue
              </p>
              <p className="author-details">
                MSCS Student
                <br />
                Northeastern University
              </p>
            </div>
            <div className="author-linkedin">
              <a href="http://linkedin.com/in/jianhua-xue-80506313a">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
