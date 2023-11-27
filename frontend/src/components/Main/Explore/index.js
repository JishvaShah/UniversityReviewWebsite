import React, {useEffect, useState} from 'react';
import Header from "../Header";
import {Helmet} from 'react-helmet';
import UniversityCard from "../University";
import {getUniByID, getRecommendUni} from "../../service/universityService";
import uniPlaceHolder from "../../Data/univeristy.json";

const Explore = () => {
    // get shown menu lists information
    const menuIds = [1, 2, 3, 4, 5];


    let user = {
        username: "testing",
        id: 12
    }


    const [universities, setUniversities] = useState([uniPlaceHolder]);

    console.log("Component rendered");
    useEffect(() => {
        console.log("useEffect is running");
        // getUniByID()
        //     .then(res => {
        //         console.log(res.data);
        //         if (res.data) {
        //             setUniversities(universities => [...universities, res.data]);
        //             console.log(universities.length);
        //         }
        //     })
        //     .catch(e => console.log(e));
        // return () => console.log("useEffect cleanup");
        getRecommendUni()
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    setUniversities(universities => res.data);
                    console.log(universities.length);
                }
            })
            .catch(e => console.log(e));
        return () => console.log("useEffect cleanup");
    }, []);



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
                            <UniversityCard university={singleSchool} key={singleSchool.id}/>
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