import React, { useState } from "react";
import "../styles/Review.css";
import { Helmet } from "react-helmet";
import Header from "../Main/Header";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { createReview } from "../service/allServices.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Review() {
  const user = useSelector((state) => state.originalUser);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    universityName: "",
    courseName: "",
    facilitiesRating: 0,
    locationRating: 0,
    studentSupportRating: 0,
    campusLookFeelRating: 0,
    studentLifeRating: 0,
    studentUnionRating: 0,
    overallRating: 0,
    review: "",
  });

  const [averageRating, setAverageRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.review.trim() || formData.overallRating === 0) {
      toast.error("All fields must be filled.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const reviewData = {
      userName: user.username,
      uniID: id,
      content: formData.review,
      rating: calculateAverage([
        formData.facilitiesRating,
        formData.locationRating,
        formData.studentSupportRating,
        formData.campusLookFeelRating,
        formData.studentLifeRating,
        formData.studentUnionRating,
      ]),
    };
    console.log(reviewData);

    createReview(reviewData)
      .then((res) => {
        if (res.responseCode === 100) {
          navigate("/explore");
          toast.success("Review submitted successfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        toast.error("Error submitting review!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    console.log("uni id:", id);
    console.log("user id:", user.username);
    console.log("Form Data:", review.value);
  };

  const calculateAverage = (ratings) => {
    if (ratings.length !== 6) {
      console.error("Expected an array of six ratings.");
      return 0;
    }

    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = Math.ceil(sum / 6);

    return average;
  };

  return (
    <>
      <Helmet>
        <title>Write a University Review</title>
      </Helmet>
      <div className="review container mt-2 mb-3">
        <Header active="review" />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2>- Review your University -</h2>
            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="universityName">University Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="universityName"
                  name="universityName"
                  value={formData.universityName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="courseName">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                />
              </div>

              <div className="ratings-container">
                <div className="form-group">
                  <label>Facilities</label>
                  <Rating
                    name="facilitiesRating"
                    value={formData.facilitiesRating}
                    onChange={(value) =>
                      handleRatingChange("facilitiesRating", value)
                    }
                    numberOfStars={5}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <Rating
                    name="locationRating"
                    value={formData.locationRating}
                    onChange={(value) =>
                      handleRatingChange("locationRating", value)
                    }
                    numberOfStars={5}
                  />
                </div>
                <div className="form-group">
                  <label>Student Support</label>
                  <Rating
                    name="studentSupportRating"
                    value={formData.studentSupportRating}
                    onChange={(value) =>
                      handleRatingChange("studentSupportRating", value)
                    }
                    numberOfStars={5}
                  />
                </div>
                <div className="form-group">
                  <label>Campus Look and Feel</label>
                  <Rating
                    name="campusLookFeelRating"
                    value={formData.campusLookFeelRating}
                    onChange={(value) =>
                      handleRatingChange("campusLookFeelRating", value)
                    }
                    numberOfStars={5}
                  />
                </div>
                <div className="form-group">
                  <label>Student Life</label>
                  <Rating
                    name="studentLifeRating"
                    value={formData.studentLifeRating}
                    onChange={(value) =>
                      handleRatingChange("studentLifeRating", value)
                    }
                    numberOfStars={5}
                  />
                </div>
                <div className="form-group">
                  <label>Student Union</label>
                  <Rating
                    name="studentUnionRating"
                    value={formData.studentUnionRating}
                    onChange={(value) =>
                      handleRatingChange("studentUnionRating", value)
                    }
                    numberOfStars={5}
                  />
                </div>
              </div>

              <div className="form-group overall-rating">
                <label htmlFor="overallRating">Overall Rating</label>
                <Rating
                  name="overallRating"
                  value={formData.overallRating}
                  onChange={(value) =>
                    handleRatingChange("overallRating", value)
                  }
                  numberOfStars={5}
                />
              </div>

              <div className="form-group">
                <label htmlFor="review">Write a detailed review here</label>
                <textarea
                  className="form-control text-review"
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn review">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
