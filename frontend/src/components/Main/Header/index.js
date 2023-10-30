import React, {useEffect, useState} from 'react'
import HeaderNavItem from "./HeaderNavItem";
import headerNavs from "./headerNavs.json";
import "./header.css";


// const selectProfile = (profile) => profile;

const Header = ({
                    active = "home"
                }) => {


    // change the active nav's isActive field
    for (let i = 0; i < headerNavs.length; i++) {
        headerNavs[i].isActive = (headerNavs[i].navTitle === active);
    }

    // data part starts from here ----------------
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const searchRecipe = (event) => {
        setSearchTerm(event.target.value);
        console.log("auto complete result ->", event.target.value);
    };

    let user = {
        username: "testing",
        id: 12
    }


    return (
        <>
            <div className="row wd-home-header">
                <div className="col-2 col-md-2">
                    <h5><a href="/home" className="text-danger fw-bold">University Rater</a></h5>
                </div>
                <div className="col-6 col-md-9 col-xl-6 align-self-center">
                    <ul className="nav justify-content-left">
                        {headerNavs.map(nav => {
                            return (
                                <HeaderNavItem key={nav._id}
                                               nav={nav}
                                               isActive={nav.isActive}/>);
                        })}
                        {/*{*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className='nav-link text-danger' href="/allUsers">User</a>*/}
                        {/*    </li>*/}
                        {/*}*/}
                    </ul>
                </div>
                <div className="d-none d-xl-block col-xl-3 align-self-center">
                    <div className="align-items-center">
                        {/*<div className="wd-magnifier">*/}
                        {/*    <label htmlFor="SearchInput">*/}
                        {/*        <i className="fas fa-search"/>*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                        <div>
                            <input id="SearchInput"
                                   className="form-control wd-search-bar-input"
                                   list="datalistOptions"
                                   placeholder="Search University"
                                   onChange={e => searchRecipe(e)}
                                  />

                            <datalist id="datalistOptions">
                                {searchResult.map(item => (
                                    <option value={item.title} />
                                ))}
                            </datalist>
                        </div>
                    </div>
                </div>
                {
                    user && user.username &&
                    <div className="d-none d-lg-block col-lg-1 align-self-center text-center">
                        {user.username}
                    </div>
                }

            </div>


        </>
    )
}

export default Header;