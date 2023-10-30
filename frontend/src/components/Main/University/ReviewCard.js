import React from "react";

const ReviewCard = ({review = {
        user: "test3",
        rating: 5,
        review: "This is a place holder"
}}) => {
    let ratingStars = [];

    // const getStars = (rating) => {
    //
    //
    //     // Round to nearest half
    //     rating = Math.round(rating * 2) / 2;
    //
    //     // Append all the filled whole stars
    //     let i = rating;
    //     for (let i = rating; i >= 1; i--)
    //         ratingStars.push("fas fa-solid fa-star p-1 text-warning");
    //
    //     // // If there is a half a star, append it
    //     if (i == .5) ratingStars.push("fas fa-half-o fa-star p-1");
    //
    //     // Fill the empty stars
    //     for (let i = (5 - rating); i >= 1; i--)
    //         ratingStars.push('fas fa-regular fa-star p-1');
    //
    //     return ratingStars;
    //
    //
    // }
    return (
        <>
            <div >
                {review.user}
                {/*{getStars(review.rating)}*/}

                {/*{*/}
                {/*    getStars(ratingStars).map(star =>*/}
                {/*        <i className={`${star}`}></i>*/}
                {/*    )*/}
                {/*}*/}

                <i className="fas fa-solid fa-star p-1 text-warning"></i>
                <i className="fas fa-regular fa-star p-1"></i>
            </div>
            <div>{review.review}</div>
        </>
    )

}
export default ReviewCard;