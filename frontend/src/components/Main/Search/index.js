import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import './search.css';
import Header from "../Header";
import { Helmet } from 'react-helmet';
import university from "../University";
import {getRecommendUni, getUniByName} from "../../service/allServices";
import Footer from "../Footer";
import UniversityCard from "../University";
import {useSelector} from "react-redux";
import uniPlaceholder from "../../Data/univeristy.json"

const selectProfile = (profile) => profile;


const Search = () => {
    const params = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [uniList, setUniList] = useState([uniPlaceholder]);
    const navigate = useNavigate();

    let user = useSelector(selectProfile)['userReducer'];

    const searchUniversity = (event) => {
        setSearchTerm(searchTerm => event.target.value);
        getUniByName({name: searchTerm})
            .then(res => {
                console.log("search result"+ JSON.stringify(res.data));
                if (res.data)
                    setSearchResult(uniList => res.data)
            })
            .catch(e => console.log(e))


    };

    const getRandomUniversity= () =>{
        getRecommendUni()
            .then(res =>{
                console.log("search: "+ JSON.stringify(res.data));
                if (res.data)
                    setUniList(uniList => res.data)
            })
            .catch(e => console.log(e))
    }



    const clickSearch = () => {
        getUniByName(searchTerm)
            .then(res => {
                    console.log("db data length ==>", res.data );
                    if (res.data ) {
                        setUniList(uniList => res.data)

                    }
                }
            )
        alert(searchTerm);
    }


    useEffect(clickSearch, []);
    const mid = Math.round(uniList.length / 2);


    return (
        <>
            <Helmet>
                <title>Search | University Rater</title>
            </Helmet>

            <div className="container mt-2">
                <Header active="search"/>

                <img className="wd-search-bg"
                     src="/images/autumn.jpeg"
                     alt=""/>

                <div className="wd-search-container">
                    <div className="wd-search-region text-center flex">
                        <div className="align-items-center">
                            <div className="wd-magnifier wd-main-magnifier">
                                <label htmlFor="MainSearchInput">
                                    <i className="fas fa-search"/>
                                </label>
                            </div>
                            <div>
                                <input
                                    className="form-control wd-main-search-input"
                                    list="item-list"
                                    placeholder="Search University"
                                    onChange={e => searchUniversity(e)}/>


                                <datalist id="item-list">
                                    {uniList.map((item, idx) => (
                                        <option value={item.name} key={idx} >
                                        </option>
                                    ))}
                                </datalist>
                            </div>
                        </div>

                        <div className="my-3">
                            <span>

                                <button onClick={clickSearch}
                                        className="btn btn-outline-primary wd-button me-3">
                                    Search For University
                                </button>
                            </span>
                            <span>
                                {/*TODO direct to a random recipe page*/}
                                <button className="btn btn-outline-primary wd-button"
                                        onClick={getRandomUniversity}>
                                    Explore A New University
                                </button>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="row justify-content-evenly">
                    <ul className="list-group wd-search-result col-12 col-md-6 row">

                        {
                            uniList.slice(0, mid).map(singleSchool =>
                                <UniversityCard university={singleSchool} key={singleSchool.id} userId={user.id}  setFavList={null} favList={[]} />
                            )
                        }
                    </ul>
                    <ul className="list-group wd-search-result col-12 col-md-6 row">
                        {
                            uniList.slice(mid, uniList.length).map(singleSchool =>
                                <UniversityCard university={singleSchool} key={singleSchool.id} userId={user.id}  setFavList={null} favList={[]} />
                            )
                        }
                    </ul>
                </div>
            </div>
            <Footer/>
        </>

    );
};
export default Search;