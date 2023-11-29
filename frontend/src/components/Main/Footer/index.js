import React from "react";
import './footer.css';
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div className="wd-footer mt-5">
            <div className="p-0">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p>Presented by CS5500 Group 8, Northeastern University @ 2023 &nbsp;&nbsp;
                        <span>
                    <Link to="/terms-of-service">
                        <button type="button" className="btn btn-outline-primary text-body wd-button-transparent p-0" >
                            Terms of Service
                        </button>
                    </Link>
                </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>
                    <Link to="/privacy-policy">
                        <button type="button" className="btn btn-outline-primary text-body wd-button-transparent p-0" >
                            Privacy Policy
                        </button>
                    </Link>
                </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>
                    <Link to="/cookie-policy">
                        <button type="button" className="btn btn-outline-primary text-body wd-button-transparent p-0" >
                            Cookie Policy
                        </button>
                    </Link>
                </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>
                    <Link to="/send-feedback">
                        <button type="button" className="btn btn-outline-primary text-body wd-button-transparent p-0" >
                            Send Feedback
                        </button>
                    </Link>
                </span>
                        </p>
                    </div>

                </div>


            </div>


            <div id="consent-popup" className="hidden">
                <p>Hello! University Rater is a website where you can explore universities and review feedback from different people!
                </p>
                <p>We value the privacy of each user. By using this site you agree to our <a href="/terms-and-conditions" className="wd-color-coral fw-bold">Terms of Use and Privacy Policy</a>.
                    Please check the link and <a id="accept" className="wd-color-coral fw-bold" href="#">Accept</a> before using our website. We hope you have a good time here.
                </p>
            </div>

        </div>
    )
}

export default Footer;
