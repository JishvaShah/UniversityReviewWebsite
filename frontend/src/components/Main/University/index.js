import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./universityCard.css";
import {likeUni, unlikeUni} from "../../service/allServices";
import cardImage from '../../images/card1.jpeg';


const UniversityCard = ({university, userId, setFavList, favList}) => {
    const [popularity, setPopularity] = useState(university.popularity);
    const [like, setLike] = useState(favList.indexOf(university.id) !== -1);
    // const [inFavList, setInFavList] = useState();
    
    const likeUniversityHandler = (universityId, dispatch) => {
        // make sure user is logged in, so he can like and unlike
        if (userId === null || userId === undefined) {
            alert("Please Login to like a university.")
            return;
        }
      

        // need to remove the like from the list
        if (like) {
            unlikeUni({uerID: userId, uniID: university.id})
                .then(r => {
                    console.log("UNLIKE"+ JSON.stringify(r.data));
                    setPopularity(popularity -1);
                    setLike(!like);
                    setFavList(favList => favList.filter(item=> item !== university.id));
                    console.log("Remove a like");
                }).catch(e => console.log(e))



        } else {   // need to add the like to the list

            likeUni({userID: userId, uniID: university.id})
                .then(r => {
                        console.log("LIKE"+JSON.stringify(r.data));
                        setPopularity(popularity + 1);
                        setLike(!like);
                        setFavList(favList => [...favList, university.id]);
                        console.log("Add a like");
                }).catch(e => console.log(e))

        }

    };



    return (
        <div className="col">
            <div className="card mx-2" >
                <img src={university.photo} className="card-img-top wd-card-img" alt="sample"/>
                <button className="btn btn-outline-primary wd-button wd-button-on-img"
                        onClick={() => likeUniversityHandler(university.id)}>
                    <i className={`fas fa-heart ${like ? "wd-color-red" : ""}`}/>
                </button>
                <div className="card-body" data-bs-toggle="modal" data-bs-target={`#modal-${university.id}`}>
                        <h5 className="wd-block-title">{university.name}</h5>
                        <p className="card-text">{university.description.substring(0, 50) + " ..."}</p>
                        <p className="card-text">Popularity: &nbsp;
                            <i className="fas fa-heart red-color"/> {popularity}</p>
                    </div>

                <div className="modal fade" id={`modal-${university.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{university.name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <img src={university.photo} className="card-img-top wd-card-img p-2" alt="sample"/>
                            <div className="modal-body">
                                <p className="fw-bold">Introduction</p>
                               <p>{university.description}</p>
                                <p><span className="fw-bold">Ranking: </span>{university.ranking}</p>
                                <p><span className="fw-bold">StudentSize: </span>{university.studentSize}</p>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>



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