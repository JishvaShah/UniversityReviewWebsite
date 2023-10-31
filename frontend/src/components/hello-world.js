import React from "react";
import {Button} from "bootstrap/js/index.esm";
import {Link} from "react-router-dom";
const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/login">
                <button className="btn btn-outline-primary wd-button wd-button-transparent">
                    Login
                </button>
            </Link>
        </>
    )
};
export default HelloWorld;