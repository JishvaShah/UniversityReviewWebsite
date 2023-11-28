import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import "./universityCard.css";
import {getRecommendUni, getFavByUserId, getUniByID, unlikeUni} from "../../service/allServices";
import image from '../../images/school.jpeg'
import placeHolderUni from '../../Data/univeristy.json'
import cardImage from "../../images/card1.jpeg";



const FavCard = ({uniID, userId, setFavList}) => {
    const [university, setUniversity] = useState( placeHolderUni);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getUniByID({id: uniID})
            .then(res => {
                console.log("single uni:" + JSON.stringify(res.data));
                if (res.data) {
                    setUniversity(university => res.data);
                    // university.photo = "../../../../public/images/school.jpeg";
                    setLoading(false);
                }
            })
            .catch(e => console.log(e));

    }, []);

    const removeLike= (uniID) => {
        unlikeUni({userID: userId, uniID})
            .then(res => {
                setFavList(favList => favList.filter(item=> item !== university.id));
            })

    };

    return (

        <>

            {
                !loading &&
                // <Link to={`/profile/${university.id}`}>
                //     <li className="list-group-item">
                //         <img className="wd-card-img" alt="sample" src={image}/>
                //         <p className="nav-link btn btn-outline-primary px-0 align-self-center wd-button-transparent">
                //             {university.name}
                //         </p>
                //     </li>
                // </Link>

                <div className="col">
                    <div className="card mx-2" >
                        <img src={atob(university.photo) || image} className="card-img-top wd-card-img" alt="sample"/>
                        <button className="btn btn-outline-primary wd-button wd-button-on-img"
                                onClick={() => removeLike(university.id)}>
                            <i className="fas fa-heart wd-color-red"/>
                        </button>
                        <div className="card-body" data-bs-toggle="modal" data-bs-target={`#modal-${university.id}`}>
                            <h5 className="wd-block-title">{university.name}</h5>
                        </div>

                        <div className="modal fade" id={`modal-${university.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"  >
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">{university.name}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <img src={image} className="card-img-top wd-card-img p-2" alt="sample"/>
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
                    </div>
                </div>
            }
            { loading && <p>Loading</p>}

        </>




    )
}

export default  FavCard;