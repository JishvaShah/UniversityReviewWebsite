import {Helmet} from "react-helmet";
import Header from "../Header";
import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import ReviewCard from "./ReviewCard";
import {getReviewsByUniId, getUniByID} from "../../service/allServices";


const AllReviews = () => {
    const params = useParams();
    const universityID = parseInt(params.id);

    const [uniName, setUniName] = useState("");
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        getReviewsByUniId(universityID)
            .then(res=> {
                if (res.data)
                    setReviews(reviews => res.data);
            })
            .catch(e => console.log(e));

        getUniByID({id: universityID})
            .then(res => {
                if (res.data)
                    setUniName(uniName => res.data.name);
            })
            .catch( e => console.log(e));
    },[]);


    return (

        <>
            <Helmet>
                <title>AllReviews | University Rater</title>
            </Helmet>

            <div className="container mt-2 mb-3">
                <Header active="review"/>
                <h1 className="wd-block-title ms-3">{uniName}</h1>
                <div className="row">
                    {
                        reviews.length > 0 && reviews.map((singleReview, idx) =>
                            <ReviewCard review={singleReview} key={idx}/>
                        )
                    }
                    {
                        reviews.length === 0 && <p className="ps-4">No reviews found for this university.&nbsp;
                        <Link to={`/addReviews/${universityID}`}>
                            Add your first review.
                        </Link>
                        </p>
                    }
                </div>
            </div>
        </>
        );


}

export default AllReviews;