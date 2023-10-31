import React, {useEffect} from 'react';
import Header from "../Header";
import {Helmet} from 'react-helmet';
import {useDispatch, useSelector} from "react-redux";
import UniversityCard from "../University";


const selectProfile = (profile) => profile;

const Explore = () => {
    // get shown menu lists information
    const menuIds = [1, 2, 3, 4, 5];


    let user = {
        username: "testing",
        id: 12
    }

    let university1 = {
        title: "Northeastern University1",
        id: 1,
        image: "./images/card2.jpeg",
        description: "This is a place holder line of university description"
    }

    let university2 = {
        title: "Northeastern University2",
        id: 2,
        image: "./images/card2.jpeg",
        description: "This is a place holder line of university description"
    }

    let university3 = {
        title: "Northeastern University3",
        id: 3,
        image: "./images/card2.jpeg",
        description: "This is a place holder line of university description"
    }


    let universities = [university1, university2, university3];


    return (
        <>
            <Helmet>
                <title>Explore | University Rater</title>
            </Helmet>

            <div className="container mt-2 mb-3">
                <Header active="explore"/>
                <div className="text-center my-4">
                    <h1 className="wd-menu-title">- &nbsp;Today's Highlight &nbsp; -</h1>
                    <h6 className="my-2 text-black">Recommendation For You!</h6>
                </div>
                <hr className="wd-color-coral"/>
                <div className="row">
                    {
                        universities.map(singleSchool =>
                            <UniversityCard university={singleSchool}/>
                        )
                    }
                </div>

                <div className="text-center my-4">
                    <h1 className="wd-menu-title">- &nbsp;Your Favorite &nbsp; -</h1>
                    <h6 className="my-2 text-black">In Your List!</h6>
                </div>
                <hr className="wd-color-coral"/>
                <div className="row">
                    {
                        universities.map(singleUniversity =>
                            <UniversityCard university={singleUniversity} key={singleUniversity.id}/>
                        )
                    }
                </div>
            </div>
        </>

    );
};
export default Explore;