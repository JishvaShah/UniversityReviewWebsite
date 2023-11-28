import React, {useEffect, useState} from 'react';
import Header from "../Header";
import {Helmet} from 'react-helmet';
import UniversityCard from "../University";
import {getFavByUserId, getRecommendUni} from "../../service/allServices";
import uniPlaceHolder from "../../Data/univeristy.json";
import {useSelector} from "react-redux";
import FavCard from "../University/favCard";

const selectProfile = (profile) => profile;

const Explore = () => {
    // get shown menu lists information
    const menuIds = [1, 2, 3, 4, 5];

    let user = useSelector(selectProfile)['userReducer'];

    const [universities, setUniversities] = useState([uniPlaceHolder]);
    const [favList, setFavList] = useState([]);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        if (user.id === null || user.id === undefined) {
            setLogin(false);
        } else {
            setLogin( true);
            getRecommendUni()
                .then(res => {
                    if (res.data) {
                        // console.log("Random uni: " + res.data);
                        setUniversities(universities => res.data);
                    }
                })
                .catch(e => console.log(e));

            console.log("record, userid: " + user.id);

            getFavByUserId({userID: user.id})
                .then(res => {
                    if (res.data) {
                        // console.log("Fav uni: "+ JSON.stringify(res.data));
                        setFavList(favList => {
                            res.data.forEach((item) => {
                                console.log("For loop: " + item.uniID)
                                favList.push(item.uniID);

                            });
                            return favList;
                        });
                        // console.log(favList.length);
                    }
                })
                .catch(e => console.log(e));
        }

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
                            <UniversityCard university={singleSchool} key={singleSchool.id} userId={user.id}/>
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
                        favList.map(uniID =>
                            <FavCard uniID={uniID} key={uniID} userId={user.id}/>
                        )
                    }
                    {login && favList.length === 0 && <p className="align-items-center">
                          OOPS, you haven't saved any universities yet.</p>

                    }
                    {!login && <p className="align-items-center">
                        Please login to see your saved list</p>

                    }

                </div>
            </div>
        </>

    );
};
export default Explore;