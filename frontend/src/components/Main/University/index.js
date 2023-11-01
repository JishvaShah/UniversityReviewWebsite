import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./universityCard.css";
import Modal from "./Modal";

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

    //----------- About University Modal
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true)
    };

    return (
        <div className="col">
            <div className="card mx-2" onClick={() => handleOpen}>
                <img src={university.image} className="card-img-top wd-card-img" alt="sample"/>
                <button className="btn btn-outline-primary wd-button wd-button-on-img"
                        onClick={() => likeUniversityHandler(university.id, dispatch)}>
                    <i className={`fas fa-heart ${inList(university) ? "wd-color-red" : ""}`}/>
                </button>
                {/*<Link to={`/details/${university.id}`} style={{ textDecoration: 'none' }}>*/}
                {/*    <div className="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">*/}
                <div className="card-body">
                        <h5 className="wd-block-title">{university.title}</h5>
                        <p className="card-text">{university.description.substring(0, 50) + " ..."}</p>
                        <p className="card-text">Popularity: &nbsp;
                            <i className="fas fa-heart red-color"/> {university.popular}</p>


                    </div>
                {/*</Link>*/}
                {isOpen?  <Modal university={university}/> : null}


                {/*<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">*/}
                {/*    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h1 className="modal-title fs-5" id="exampleModalLabel">{university.title}</h1>*/}
                {/*                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>*/}
                {/*            </div>*/}
                {/*            <img src={university.image} className="card-img-top wd-card-img p-2" alt="sample"/>*/}
                {/*            <div className="modal-body">*/}
                {/*                {university.description}*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                {/*                <button type="button" className="btn btn-primary">Save changes</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
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