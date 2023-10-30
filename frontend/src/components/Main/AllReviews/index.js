import {Helmet} from "react-helmet";
import Header from "../Header";
import React from "react";
import { useParams } from 'react-router-dom';
import ReviewCard from "../University/ReviewCard";


const AllReviews = () => {
    const params = useParams();
    const universityID = parseInt(params.id);

    //TODO: should get all reviews data from database
    let data = {
        title: "Northeastern University1",
        id: 12345,
        image: "./images/card2.jpeg",
        description: "This is a place holder line of university description",
        reviews: [
            {
                user: "test1",
                rating: 4,
                review: "This is a place holder"
            },
            {
                user: "test2",
                rating: 3,
                review: "This is a place holder"
            },
            {
                user: "test3",
                rating: 5,
                review: "This is a place holder"
            }
        ]
    }



    return (

        <>
            <Helmet>
                <title>AllReviews | University Rater</title>
            </Helmet>

            <div className="container mt-2 mb-3">
                <Header active="review"/>
                <h1 className="wd-block-title">{data.title}</h1>
                <div className="row">
                    {
                        data.reviews.map(singleReview =>
                            <ReviewCard university={singleReview}/>
                        )
                    }
                </div>
            </div>
        </>
        );


}

export default AllReviews;