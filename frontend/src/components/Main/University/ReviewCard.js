import React from "react";

const ReviewCard = ({review = {
        user: "test3",
        rating: 2,
        review: "This is a place holder"
}}) => {


    const getStars = (rating) => {
        let ratingStars = [];
        // Round to the nearest half
        rating = Math.round(rating * 2) / 2;

        let i = rating;
        // Append all the filled whole stars
        for ( ; i >= 1; i--)
            ratingStars.push('fas fa-regular fa-star p-1 text-warning');

        // If there is a half a star, append it
        if (i === .5) ratingStars.push("fas fa-regular fa-star-half p-1 text-warning");

        // Fill the empty stars
        for (let m = (5 - rating); m >= 1; m--)
            ratingStars.push('fas fa-light fa-star p-1 text-body-tertiary ');

        return ratingStars;
    }
    return (
        <>
            <div className="row border border-dark-subtle border-1 m-3 p-3 rounded me-0 pe-0">
                    <div className="fw-bold fs-4 text-body mb-1">{review.user}
                        {
                            getStars(review.rating).map(star =>
                                <i className={`${star}`}></i>
                        )
                    }
                    </div>

                <div>
                    {review.review}
                </div>

            </div>
        </>
    )

}
export default ReviewCard;