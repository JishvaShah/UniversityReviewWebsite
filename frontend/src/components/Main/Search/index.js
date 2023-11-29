import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import './search.css';
import Header from "../Header";
import { Helmet } from 'react-helmet';
import university from "../University";
import {getRecommendUni, getUniByName} from "../../service/allServices";


const Search = () => {
    const params = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    let uniList = [];
    const navigate = useNavigate();

    const searchUniversity = (event) => {
        setSearchTerm(searchTerm => event.target.value);
        getUniByName({name: searchTerm})
            .then(res => {
                console.log("search result"+ res);
                if (res.data)
                    setSearchResult(uniList => res.data)
            })
            .catch(e => console.log(e))


    };

    const getRandomUniversity= () =>{
        getRecommendUni()
            .then(res =>{
                if (res.data)
                    uniList = res.data;
            })
            .catch(e => console.log(e))
    }



    const clickSearch = () => {
        getUniByName(searchTerm)
            .then(res => {
                    console.log("db data length ==>", res.data.length );
                    if (res.data.length !== 0) {
                        uniList = res.data;

                    }
                }
            )
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
                        {uniList.slice(0, mid).map(item => {
                            return (
                                <Link to={`/details/${item.id === undefined? item._id: item.id}`}>
                                    <li className="list-group-item wd-search-result-item d-flex"
                                        key={item.id}>

                                        <span>
                                            <img className="wd-search-result-image"
                                                 src={item.image} alt=""/>
                                        </span>

                                        <span className="ms-3">
                                            <h4 className="wd-search-result-name fw-bold wd-color-coral">{item.title}</h4>
                                            <h6 className="my-1">servings: &nbsp;&nbsp;&nbsp;&nbsp;{item.servings}</h6>
                                            <h6 className="">total time:  &nbsp;{item.readyInMinutes} min</h6>
                                            {/*<h6 >{item.id}</h6>*/}
                                        </span>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                    <ul className="list-group wd-search-result col-12 col-md-6 row">
                        {uniList.slice(mid, uniList.length).map(item => {
                            return (
                                <Link to={`/details/${item.id}`}>
                                    <li className="list-group-item wd-search-result-item d-flex"
                                        key={item.id}>

                                        <span>
                                            <img className="wd-search-result-image"
                                                 src={item.image} alt=""/>
                                        </span>

                                        <span className="ms-3">
                                            <h4 className="wd-search-result-name fw-bold wd-color-coral">{item.title}</h4>
                                            <h6 className="my-1">servings: &nbsp;&nbsp;&nbsp;&nbsp;{}</h6>
                                            <h6 className="">total time:  &nbsp;{} min</h6>
                                            {/*<h6 >{item.id}</h6>*/}
                                        </span>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>

    );
};
export default Search;