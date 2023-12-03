import React, {useEffect, useState} from 'react';
import Header from "../Header";
import {Helmet} from 'react-helmet';
import University from "../University";
import {getFavByUserId, getRecommendUni} from "../../service/allServices";
import uniPlaceHolder from "../../Data/univeristy.json";
import {useSelector} from "react-redux";
import FavCard from "../University/favCard";
import {Link} from "react-router-dom";
import Footer from "../Footer";

const selectProfile = (profile) => profile;

const Explore = () => {
    // get shown menu lists information
    const menuIds = [1, 2, 3, 4, 5];

    let user = useSelector(selectProfile)['userReducer'];

    const [universities, setUniversities] = useState([]);
    const [favList, setFavList] = useState([]);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        getRecommendUni()
            .then(res => {
                console.log("uni: "+ JSON.stringify(res.data));
                if (res.data) {
                    setUniversities(universities => res.data);
                }
            })
            .catch(e => console.log(e));

        if (user.id === 0) {
            setLogin(false);
        } else {

            console.log("record, userid: " + JSON.stringify(user));

            getFavByUserId({userID: user.id})
                .then(res => {
                    if (res.data) {
                        // console.log("Fav uni: "+ JSON.stringify(res.data));
                        setFavList(favList => {
                            res.data.forEach((item) => {
                                // if the item is not in the fav list, add it into favList
                                if (favList.indexOf(item.uniID) === -1)
                                    favList.push(item.uniID);

                            });
                            return favList;
                        });

                    }
                })
                .catch(e => console.log(e));
            setLogin( true);
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
                            <University university={singleSchool} key={singleSchool.id} userId={user.id} setFavList={setFavList} favList={favList} />
                        )
                    }
                </div>

                <div className="text-center my-4">
                    <h1 className="wd-menu-title">- &nbsp;Your Favorite &nbsp; -</h1>
                    <h6 className="my-2 text-black">In Your List!</h6>
                </div>
                <hr className="wd-color-coral"/>

                <div>
                    <ul className="list-group list-group-horizontal">
                    {
                        favList.map(uniID =>
                            <FavCard uniID={uniID} key={uniID} userId={user.id}  setFavList={setFavList}/>
                        )
                    }
                    </ul>
                    {!login && <p className="align-items-center">
                        Please &nbsp;
                        <Link to="/login">
                            login to see your saved list
                        </Link>
                    </p>

                    }
                    {login && favList.length === 0 && <p className="align-items-center">
                          OOPS, you haven't saved any universities yet.</p>

                    }


                </div>
            </div>
            <Footer/>
        </>

    );
};
export default Explore;