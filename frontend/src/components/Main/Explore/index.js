import React, {useEffect} from 'react';
import Header from "../Header";
import {Helmet} from 'react-helmet';
import {useDispatch, useSelector} from "react-redux";
import UniversityCard from "../University";
import {getRandomUni} from "../../service/universityService";


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
        ranking: 1,
        studentSize:100,
        popularity: 100,
        photo: "./images/card1.jpeg",
        description: "This is a place holder line of university description, " +
            "This is a place holder line of university description, " +
            "This is a place holder line of university description"
    }

    let university2 = {
        title: "Northeastern University2",
        id: 2,
        popularity: 200,
        ranking: 2,
        studentSize:200,
        photo: "./images/register.jpeg",
        description: "This is a place holder line of university description"
    }

    let university3 = {
        title: "Northeastern University3",
        id: 3,
        popularity: 300,
        ranking: 3,
        studentSize:300,
        photo: "./images/card2.jpeg",
        description: "This is a place holder line of university description"
    }


    let universities = [university1, university2, university3];

    useEffect(() => updateUniList);

    const updateUniList = () => {
        getRandomUni({"id": 1})
            .then(singleUni => {
                if (singleUni.title) {
                    universities.push(singleUni);
                }
            })
            .catch(e => console.log(e));
    }



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