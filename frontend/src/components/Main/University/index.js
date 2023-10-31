import React from "react";
import {Link} from "react-router-dom";
import "./universityCard.css";

const UniversityCard = ({university}) => {


    const inList = (university) => {
        // return user.favUniversityList.includes(university.id);
    }


    const likeUniversityHandler = (university, dispatch) => {
        // if (!user.username || user.username === "") {
        //     alert("Please Login to like a university.")
        //     return;
        // }
        //
        // if (inList(university)) {
        //    console.log("Need to unlike the university")
        // } else {
        //    console.log("Need to add university to users fav list")
        // }
    };

    // if (!university.image) {
    //     university.image = "/images/wholeSchool.jpeg";
    // }

    return (
        <div className="col">
            <div className="card mx-2">
                <img src={university.image} className="card-img-top wd-card-img" alt="sample"/>
                <button className="btn btn-outline-primary wd-button wd-button-on-img"
                        onClick={() => likeUniversityHandler(university.id, dispatch)}>
                    <i className={`fas fa-heart ${inList(university) ? "wd-color-red" : ""}`}/>
                </button>
                <Link to={`/details/${university.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card-body">
                        <h5 className="wd-block-title">{university.title}</h5>
                        <p className="card-text">{university.description.substring(0, 50) + " ..."}</p>
                        <p className="card-text">Popularity: &nbsp;
                            <i className="fas fa-heart red-color"/> 100</p>
                        <p className="card-text">
                            <small className="text-muted">Presented By
                                { university.title === null ? " A Great University" : " "+ university.title  }
                            </small>
                        </p>

                    </div>
                </Link>
                <div className="d-grid gap-2 d-md-flex justify-content-center m-2">
                    <Link to={`/allReviews/${university.id}`}>
                        <button className="btn btn-outline-primary me-md-2" type="button">All reviews</button>
                    </Link>
                    <Link to={`/addReviews/${university.id}`}>
                        <button className="btn btn-outline-primary" type="button">Write Review</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default UniversityCard;